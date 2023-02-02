function showMessage() {
    var messageBox = document.getElementById("message-box");
    messageBox.style.display = "inline";
    setTimeout(function () {
      messageBox.style.display = "none";
    }, 2000); // Die Box wird nach 2000 Millisekunden ausgeblendet.
  }

function addToCart(item) {
  // Check if the local storage is supported by the browser
  if (typeof(Storage) !== "undefined") {
    // Get the current cart items from the local storage
    var currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Add the new item to the cart
    currentCart.push(item);
    
    // Save the updated cart back to the local storage
    localStorage.setItem("cart", JSON.stringify(currentCart));
  } else {
    alert("Local storage is not supported by your browser.");
  }
}

function removeFromCart(item) {
    if (typeof(Storage) !== "undefined") {
      var cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Remove the specified item from the cart
      var index = cart.indexOf(item);
      if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      alert("Local storage is not supported by your browser.");
    }
}

function showCart_simple() {
    // Hier wird der Code zum Anzeigen des Warenkorbs eingefügt
    var cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
}

function showCart() {
    // Hier wird der Code zum Anzeigen des Warenkorbs eingefügt
    var cart = JSON.parse(localStorage.getItem("cart"));
    var cartTable = document.getElementById("cart-items");
    cartTable.innerHTML = "";

    for (var item in cart) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.innerHTML = item;
      tr.appendChild(td1);
      var td2 = document.createElement("td");
      td2.innerHTML = cart[item].size;
      tr.appendChild(td2);

      var td3 = document.createElement("td");
      td3.innerHTML = cart[item].qty;
      tr.appendChild(td3);

      var td4 = document.createElement("td");
      td3.innerHTML = cart[item].price;
      tr.appendChild(td4);

      cartTable.appendChild(tr);
    }
  }