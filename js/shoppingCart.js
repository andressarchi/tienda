// Array para almacenar los elementos del carrito
var cartItems = [];

// Función para agregar un elemento al carrito
function addToCart(itemName, itemPrice) {
    // Verificar si el elemento ya está en el carrito
    var existingItem = cartItems.find(function(item) {
        return item.name === itemName;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        var newItem = {
            name: itemName,
            price: itemPrice,
            quantity: 1
        };
        cartItems.push(newItem);
    }

    // Actualizar la visualización del carrito
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    var cartItemsList = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    var total = 0;

    // Limpiar la lista de elementos del carrito
    cartItemsList.innerHTML = '';

    // Agregar los elementos del carrito a la lista
    cartItems.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' x ' + item.quantity;
        cartItemsList.appendChild(li);
        total += item.price * item.quantity;
    });

    // Actualizar el precio total del carrito
    cartTotal.textContent = 'Total: $' + total;
}
