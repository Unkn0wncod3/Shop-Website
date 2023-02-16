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
    showCart();
  } else {
    alert("Local storage is not supported by your browser.");
  }
  updateCartIcon();
}

function showCart_simple() {
  // Hier wird der Code zum Anzeigen des Warenkorbs eingefügt
  var cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
}


function updateCartIcon() {
  showCart_simple();
  var cart = JSON.parse(localStorage.getItem("cart"));
  const cart_icon = document.getElementById("cart-icon");


  if (localStorage.getItem("cart") === "{}") {
    cart_icon.setAttribute("value", 0);
    cart_icon.style.setProperty('--opacity', 0.0);
  } else {
    cart_icon.style.setProperty('--opacity', 1.0);
    var count = 0;
    for (const item in cart) {
      count += parseInt(cart[item].qty);
    }
    cart_icon.setAttribute("value", count);
  }
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
      td1.innerHTML = cart[item].name;
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
      remove_button.id = item
      remove_button.setAttribute("onClick", "removeFromCart(id),totalprice()");
      remove_button.innerHTML = "REMOVE";
      td5.innerHTML = remove_button.outerHTML;
      tr.appendChild(td5);

      cartTable.appendChild(tr);
    }
  }
  updateCartIcon();
}

function addToCart() {
  if (typeof (Storage) !== "undefined") {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    var cart = JSON.parse(localStorage.getItem("cart")) || {};

    var size = document.querySelector('input[name="size"]:checked').value;
    var quantity = document.querySelector('input[name="quantity"]:checked').value;

    $.getJSON("catalog.json", function (data) {
      const item_id = id + "-" + size;
      
      if(!cart[item_id]) {
        cart[item_id] = {};
        cart[item_id].qty = quantity;
      } else {
        cart[item_id].qty = parseInt(cart[item_id].qty) + parseInt(quantity);
      }

      cart[item_id].id = id;
      cart[item_id].name = data.products[id].name;
      cart[item_id].size = size;
      cart[item_id].price = data.products[id].price * cart[item_id].qty;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartIcon();
    });
    
  } else {
    alert("Local storage is not supported by your browser.");
  }
  
}

function totalprice(){
  var cart = JSON.parse(localStorage.getItem("cart")) || {};
  var totalprice=0;
  for (var key in cart) {
    if (cart.hasOwnProperty(key)) {
      totalprice += cart[key].price;
    }
  }
  totalprice = totalprice.toFixed(2);
  document.getElementById("tp").innerHTML = "Total: "+totalprice+"€";
}

function clearCart() {
  localStorage.removeItem("cart");
}

function createProductCard() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  $.getJSON("catalog.json", function (data) {
    console.log(data);
    $("#product_title").html(data.products[id].name);
    $("#product_description").html(data.products[id].description);
    $("#ProductPic").css("background", "url(images/" + data.products[id].image_path + ")");
    if (data.products[id].category=="bottoms") {
      $("#ProductPic").css("width", "400px");
    }
    $("#product_price").html("Price: " + data.products[id].price + "€");
  });
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "123") {
    document.getElementById("message").innerHTML = "Login successful!";
    showMessage();
  } else {
    document.getElementById("message").innerHTML = "Wrong username or password";
    showMessage_false();
  }
}

function showMessage_false() {
  var messageBox = document.getElementById("message-box-false");
  messageBox.style.display = "inline";
  setTimeout(function () {
    messageBox.style.display = "none";
  }, 2000); // Die Box wird nach 2000 Millisekunden ausgeblendet.
}