
const jsonUrl = 'http://localhost:3000/Soft_drinks';

const container = document.getElementById("Soft_drinks");


fetch(jsonUrl)
    .then( (response) =>{
        return response.json();
    })
    .then( (data) =>{

        data.forEach((Soft_drink) =>{

            const tmp = document.createElement("div")
            tmp.innerHTML =
                '<form name="product-item" class="product-item" method="post"> ' +
                "<div class=Title></div>" +
                "<div class=PSelect></div>" +
                "<img class=img1 src=/ alt='Test'/>" +
                "<div class=Price></div>" +
                "<label for=size> </label>" +
                `<select name="size" class="size">` +
                "<option class=Value0 value=0></option>" +
                "<option class=Value1 value=1></option>" +
                "<option class=Value2 value=2></option>" +
                "<option class=Value3 value=3></option>" +
                "</select>" +
                '<input class="inputID" type="hidden" value="" name="id" />' +
                `<button  type="submit"  id="ButtonAddCart"> <img class="imgCart" src="" alt="Cart"> </button>` +
                "</form>"



            tmp.getElementsByClassName("Title")[0].innerText = Soft_drink.Title;
            tmp.getElementsByClassName("img1")[0].setAttribute("src", Soft_drink.Img);
            tmp.getElementsByClassName("Price")[0].innerText = Soft_drink.Price;
            tmp.getElementsByClassName("imgCart")[0].setAttribute("src", Soft_drink.Cart);
            tmp.getElementsByClassName("Value0")[0].innerText = Soft_drink.Value0;
            tmp.getElementsByClassName("Value1")[0].innerText = Soft_drink.Value1;
            tmp.getElementsByClassName("Value2")[0].innerText = Soft_drink.Value2;
            tmp.getElementsByClassName("Value3")[0].innerText = Soft_drink.Value3;
            tmp.getElementsByClassName("inputID")[0].setAttribute("value", Soft_drink.id);
            tmp.getElementsByClassName("product-item")[0].addEventListener("submit", submitEvent);


            container.appendChild(tmp);


        })
    })