




             const jsonUrl2 = "http://localhost:3000/Cart";
             const container = document.getElementById("Shopping_Cart");


             fetch(jsonUrl2)
                 .then((response) => {
                     return response.json();
                 })
                 .then((data) => {
                     data.forEach((Product) => {



        /*     let cart = JSON.parse(localStorage.getItem("CART")) || [];

              showItem ();

             function showItem() {
                cart.forEach((Product) => {
*/

                      if (document.cookie == Product.USERID) {

                          const tmp = document.createElement("div")
                          tmp.innerHTML =
                              '<form name="product-item" class="product-item" method="post"> ' +
                              "<div class=Title></div>" +
                              "<img class=img1 src=/ alt='Test'/>" +
                              "<div class=PSelect></div>" +
                              "<div class=Price></div>" +
                              '<input class="inputID" type="hidden" value="" name="id" />' +
                              `<button  type="submit"  id="ButtonAddCart"> <img class="ButtonD" src="../Pictures/Button_Delete.png" alt="Cart"> </button>` +
                              "</form>"


                          tmp.getElementsByClassName("Title")[0].innerText = Product.Cart.Title;
                          tmp.getElementsByClassName("img1")[0].setAttribute("src", Product.Cart.Img);
                          tmp.getElementsByClassName("inputID")[0].setAttribute("value", Product.id);
                          tmp.getElementsByClassName("Price")[0].innerText = Product.Cart.Price;
                          tmp.getElementsByClassName("product-item")[0].addEventListener("submit", submitEvent2);


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


                      }})})
















































































