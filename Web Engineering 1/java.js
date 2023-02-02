function showMessage() {
  var messageBox = document.getElementById("message-box");
  messageBox.style.display = "inline";
  setTimeout(function () {
    messageBox.style.display = "none";
  }, 2000); // Die Box wird nach 2000 Millisekunden ausgeblendet.
}

function removeFromCart(item) {
  if (typeof (Storage) !== "undefined") {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    delete cart[item]
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
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

  // Wenn der Warenkorb leer ist, soll angegeben werden das er leer ist.
  if (localStorage.getItem("cart") === "{}") {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = "Your shopping cart is empty";
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    tr.appendChild(td3);

    var td4 = document.createElement("td");
    tr.appendChild(td4);

    cartTable.appendChild(tr);
  } else {
    for (const item in cart) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.innerHTML = cart[item].id;
      tr.appendChild(td1);
      var td2 = document.createElement("td");
      td2.innerHTML = cart[item].size;
      tr.appendChild(td2);

      var td3 = document.createElement("td");
      td3.innerHTML = cart[item].qty;
      tr.appendChild(td3);

      var td4 = document.createElement("td");
      td4.innerHTML = cart[item].price;
      tr.appendChild(td4);

      var td5 = document.createElement("td");
      var remove_button = document.createElement("button");
      remove_button.className = "remove-cart-button";
      remove_button.innerHTML = "remove from cart";
      remove_button.id = item
      remove_button.setAttribute("onClick", "removeFromCart(id)");
      td5.innerHTML = remove_button.outerHTML;
      tr.appendChild(td5);

      cartTable.appendChild(tr);
    }
  }
}

function addToCart(id, size, qty, price) {
  if (typeof (Storage) !== "undefined") {
    var cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (!cart[id]) {
      cart[id] = {};
    }
    cart[id].id = id;
    cart[id].size = size;
    cart[id].qty = qty;
    cart[id].price = price;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    alert("Local storage is not supported by your browser.");
  }
}

function clearCart() {
  localStorage.removeItem("cart");
}