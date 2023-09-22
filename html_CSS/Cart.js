




             const jsonUrl2 = "http://localhost:3000/Cart";
             const container = document.getElementById("Shopping_Cart");


             fetch(jsonUrl2)
                 .then((response) => {
                     return response.json();
                 })
                 .then((data) => {

                     data.forEach((Product) => {

                          if (document.cookie == Product.USERID) {

                              const tmp = document.createElement("div")
                              tmp.innerHTML =
                                  "<div class=Title></div>" +
                                  "<img class=img1 src=/ alt='Test'/>" +
                                  "<div class=PSelect></div>" +
                                  "<div class=Price></div>"



                              tmp.getElementsByClassName("Title")[0].innerText = Product.Cart.Title;
                              tmp.getElementsByClassName("img1")[0].setAttribute("src", Product.Cart.Img);
                              tmp.getElementsByClassName("Price")[0].innerText = Product.Cart.Price;

                              if (Product.Option1 == "1") {
                                  tmp.getElementsByClassName("PSelect")[0].innerText = Product.Cart.Value1;
                              }

                              if (Product.Option1 == "2") {
                                  tmp.getElementsByClassName("PSelect")[0].innerText = Product.Cart.Value2;
                              }

                              if (Product.Option1 == "3") {
                                  tmp.getElementsByClassName("PSelect")[0].innerText = Product.Cart.Value3;
                              }

                              container.appendChild(tmp);


                          }

                     })
                 })
















/*fetch(jsonUrl)
    .then( (response) =>{
        return response.json();
    })
    .then( (data) =>{

        data.forEach((Cart) => {

            const tmp = document.createElement("div")
            tmp.innerHTML =
                "<div class=Title></div>" +
                "<img class=img1 src=/ alt='Test'/>" +
                "<div class=Price></div>" +



            tmp.getElementsByClassName("Title")[0].innerText = Cart.Title;
            tmp.getElementsByClassName("img1")[0].setAttribute("src", Cart.Img);
            tmp.getElementsByClassName("Price")[0].innerText = Cart.Price;



            container.appendChild(tmp);


        })})
*/









































/*
const container = document.getElementById("Shopping_Cart");
const ButtonCart1 = document.getElementById("ButtonCart1");
const ButtonCart2 = document.getElementById("ButtonCart2");
let ButtonCartCount = "";


 ButtonCart1.addEventListener("click", function () {
     ButtonCartCount = ButtonCart1
      const tmp = document.createElement("div")
     tmp.innerHTML =
         "<div class=Title></div>" +
         "<div class=Price></div>"
     container.appendChild(tmp);

     const jsonUrl = 'http://localhost:3000/salads';
     fetch(jsonUrl)
         .then( (response) =>{
             return response.json();
         })
         .then( (data) => {
             data.forEach((salad) => {

                 tmp.getElementsByClassName("Title")[0].innerText = salad.Title
                 tmp.getElementsByClassName("Price")[0].innerText = salad.Price
             })

         })})

ButtonCart2.addEventListener("click", function () {
    ButtonCartCount = ButtonCart2
    const tmp = document.createElement("div")
    tmp.innerHTML =
        "<div class=Title></div>" +
        "<div class=Price></div>"
    container.appendChild(tmp);

    const jsonUrl = 'http://localhost:3000/salads';
    fetch(jsonUrl)
        .then( (response) =>{
            return response.json();
        })
        .then( (data) => {
            data.forEach((salad) => {

                tmp.getElementsByClassName("Title")[1].innerText = salad.Title
                tmp.getElementsByClassName("Price")[1].innerText = salad.Price
            })

        })})

*/






















/*
let cart = [];
let totalPrice = 0;


function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {

    const totalPriceElement = document.getElementById('totalPrice');

    cartItemsElement.innerHTML = '';
    totalPriceElement.textContent = totalPrice.toFixed(2);

    const cartItemsElement = document.getElementById('Cart_Items')


        cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);


    });
}}) */