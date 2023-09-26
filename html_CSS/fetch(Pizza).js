
const jsonUrl = 'http://localhost:3000/pizzas';

const container = document.getElementById("pizzas");


fetch(jsonUrl)
    .then( (response) =>{
        return response.json();
    })
    .then( (data) =>{

        data.forEach((pizza) =>{

            const tmp = document.createElement("div")
            tmp.innerHTML =
                '<form name="product-item" class="product-item" method="post"> ' +
                "<div class=Title></div>" +
                "<div class=PSelect></div>" +
                "<img class=img1 src=/ alt='Test'/>" +
                "<div class=Price></div>" +
                "<label for=sizeP> </label>" +
                `<select name="sizeP" class="sizeP">` +
                "<option class=Value0 value=0></option>" +
                "<option class=Value1 value=1></option>" +
                '<option class="Value2" value=2></option>' +
                "<option class=Value3 value=3></option>" +
                "</select>" +
                '<input class="inputID" type="hidden" value="" name="id" />' +
                `<button class="submit" type="submit" data-target="" id="ButtonAddCart"> <img class="imgCart" src="" alt="Cart"> </button>` +
                "</form>"


            tmp.getElementsByClassName("Title")[0].innerText = pizza.Title;
            tmp.getElementsByClassName("PSelect")[0].innerText = pizza.Ingredients;
            tmp.getElementsByClassName("img1")[0].setAttribute("src", pizza.Img);
            tmp.getElementsByClassName("Price")[0].innerText = pizza.Price;
            tmp.getElementsByClassName("Value0")[0].innerText = pizza.Value0;
            tmp.getElementsByClassName("Value1")[0].innerText = pizza.Value1;
            tmp.getElementsByClassName("Value2")[0].innerText = pizza.Value2;
            tmp.getElementsByClassName("Value3")[0].innerText = pizza.Value3;
            tmp.getElementsByClassName("imgCart")[0].setAttribute("src", pizza.Cart);
            tmp.getElementsByClassName("inputID")[0].setAttribute("value", pizza.id);
            tmp.getElementsByClassName("product-item")[0].addEventListener("submit", submitEvent1);


            container.appendChild(tmp);


        })
    })