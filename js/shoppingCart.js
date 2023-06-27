function increaseQuantity(elementId) {
    const quantityElement = document.getElementById(elementId);
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
}

function decreaseQuantity(elementId) {
    const quantityElement = document.getElementById(elementId);
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
    }
}

function addToCart(productName, productPrice, quantityElementId) {
    const quantityElement = document.getElementById(quantityElementId);
    const quantity = parseInt(quantityElement.textContent);
    const totalPrice = productPrice * quantity;

    // Aquí puedes realizar la lógica para agregar el producto al carrito de compras
    // Puedes utilizar la variable 'productName' para obtener el nombre del producto
    // y la variable 'totalPrice' para obtener el precio total (precio del producto * cantidad)

    // Por ahora, simplemente mostraremos una alerta con la información del producto agregado
    alert(`Producto: ${productName}\nCantidad: ${quantity}\nPrecio Total: $${totalPrice}`);
}
