# Shop-Website

## Get started
```
git clone https://github.com/Unkn0wncod3/Shop-Website.git
cd Shop-Website
npm install
npm run dev
```

Go to http://localhost:8000.

## Documentation

### Ylem.clo

Functions of the Web-Shop:

### Homepage:

At the top, there is a nav-bar with links to the different pages of the shop, and every link has a hover function. If you press "About", it will scroll down smoothly to the bottom of the page. Below the nav-bar, you'll find a text "Streetwear for everyone" and also an arrow that brings you to the products when you click on it. 

![image](https://user-images.githubusercontent.com/97988163/225872311-6b1ceab7-34cb-42cb-907a-648401edaec9.png)

The next section is the products sorted by Bottoms and Tops, and the images are also links to the products, and both images have a hover effect.

![image](https://user-images.githubusercontent.com/97988163/225872343-ccce7c9f-97a0-4897-b9d3-634fa6a1fe27.png)

The two divs below the products have an angle of -11deg and no functions.

![image](https://user-images.githubusercontent.com/97988163/225872466-fbe30cbb-3319-40b0-ba81-2666a4a3eea0.png)

The social media section also has no functions.

![image](https://user-images.githubusercontent.com/97988163/225872479-35619257-6111-4865-ab36-49da3e8d910e.png)

Last but not least, the footer, on the right side, you can press on About us, Pants, Shirts, and Hoodies. Also, no hover effects.

![image](https://user-images.githubusercontent.com/97988163/225872493-04e5c7c1-fa02-40ad-b9a0-3669883d1347.png)

<br>

### Tops:

The header and the footer stay the same on every page. All products are in a div called "card," and the images of the Hoodies or Tees are clickable.

![image](https://user-images.githubusercontent.com/97988163/225872517-3c3458e0-c70c-4721-bc33-54f97ad41da2.png)

<br>

### Bottoms:

All products are in a div called "card," and the images of the Pants are clickable.

![image](https://user-images.githubusercontent.com/97988163/225872567-e23e713f-fa58-4885-a7b9-f4bac9e56b4b.png)

<br>

### Productpage:

After clicking on a product, you'll be sent on to the product page. On this page there is an image of the product on the right side and a headline + text + price on the left, those variate to every product you click on. Below the price, there is a “in stock” text that doesn't change. Below that, you can choose the size and quantity you want to order. After you selected the size + quantity, you can click on the button “add to cart” and your Product + your selection will be added to the shopping cart. The default values are size: M and quantity: 1.

![image](https://user-images.githubusercontent.com/97988163/225872586-5f18e83f-bb19-4c69-b1e4-e737e1edf828.png)

<br>

### Shoppingcart:

The shopping cart is a table with fills with the selection you have chosen on the product page. The last row item is a remove button, to remove the product in this line. Below the table, there is a total price, which adds all prices in the shopping cart together.

![image](https://user-images.githubusercontent.com/97988163/225872833-49c43261-1353-49c2-84d8-5e4c0292894d.png)

After removing the products, there will be a text shown "Your shopping cart is empty" and the total price will change to 0.

<br>

### Log-in:

On top of the log-in page there is a logo of the brand, and it changes the color from black to white, when you hover over it, it's also a link to the homepage. 

![image](https://user-images.githubusercontent.com/97988163/225872855-d808b1ea-1264-41c2-b756-6a32ae1fa209.png)

<br>

Below that, there is a casual log-in with username and password. After pressing on the "login" Button, there will be a message shown "Wrong username or password" + a box with a red X in the bottom right corner or a message "Login successful" + a box with a green check. The correct username is `admin` and the correct password is `123 `.
 
![image](https://user-images.githubusercontent.com/97988163/225872888-8a828333-a1f7-4ca8-9284-801452ed4451.png)

<br>

### About us:
The About us page shows a Legal Notice about the brand. On top of the page, there is a logo with the same hover effect like on the log-in page. There are no other functions on this page.

![image](https://user-images.githubusercontent.com/97988163/225872941-53b7406f-ba9e-4c21-bca9-66b8256f1d1f.png)

<br>

Who did what?

| Philip 	| Alexander and Cristiano 	|
|---	|---	|
| Frontend: 	| Backend: 	|
| HTML + CSS of all pages: Homepage, Tops, Bottoms, Product page, Shopping cart,  About us and Log-in 	| Java, JSON, Node.js of all pages. Setup localhost server with express. 	|
| Implementation of the functions for the arrow on the homepage and the about function in the header 	| Implementation of the shopping cart functions, dynamic message boxes, updating the user interface, dynamic product page construction. 	|
| Design of all products, the logo and the package 	| Pair programming, so we often worked on the same computer and on the same functions 	|