// Variables globales
let total = 0;
let contadorProductos = 0;

// Obtener referencias a los elementos del DOM
const listaCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const totalCarrito = document.querySelector('#total-carrito');
const contadorCarrito = document.querySelector('#contador-carrito');

function insertarCarrito(producto) {
  const row = document.createElement('li');
  row.innerHTML = `
    <span>${producto.titulo}</span>
    <span>${producto.precio}</span>
    <input type="number" min="1" value="${producto.cantidad}">
    <button class="eliminar-producto">Eliminar</button>
  `;
  listaCarrito.appendChild(row);

  // Calcular precio total
  const precio = parseInt(producto.precio.substring(1));
  total += precio * producto.cantidad;
  totalCarrito.textContent = `$${total.toFixed(2)}`;

  // Actualizar contador de productos
  contadorProductos += producto.cantidad;
  contadorCarrito.textContent = contadorProductos;
}

function eliminarProducto(e) {
  if (e.target.classList.contains('eliminar-producto')) {
    const producto = e.target.parentElement;
    const precio = parseInt(producto.querySelector('span:nth-child(2)').textContent.substring(1));
    const cantidad = parseInt(producto.querySelector('input').value);
    total -= precio * cantidad;
    totalCarrito.textContent = `$${total.toFixed(2)}`;

    producto.remove();
  }
}

// Event listeners
listaCarrito.addEventListener('click', eliminarProducto);
vaciarCarritoBtn.addEventListener('click', () => {
  listaCarrito.innerHTML = '';
  total = 0;
  totalCarrito.textContent = '$0.00';
  contadorProductos = 0;
  contadorCarrito.textContent = '0';
});
