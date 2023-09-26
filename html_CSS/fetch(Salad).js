
const jsonUrl = 'http://localhost:3000/salads';

const container = document.getElementById("Salads");


fetch(jsonUrl)
    .then( (response) =>{
        return response.json();
    })
    .then( (data) =>{

        data.forEach((salad) =>{

            const tmp = document.createElement("div")
            tmp.innerHTML =
                '<form name="product-item" class="product-item" method="post"> ' +
                `<div class="Title"></div>` +
                "<div class=PSelect></div>" +
                "<img class=img1 src=/ alt='Test'/>" +
                "<div class=Price></div>" +
                "<label for=dressing> </label>" +
                `<select name="dressing" class="dressing">` +
                "<option class=Value0 value=0></option>" +
                "<option class=Value1 value=1></option>" +
                '<option class="Value2" value=2></option>' +
                "<option class=Value3 value=3></option>" +
                "</select>" +
                '<input class="inputID" type="hidden" value="" name="id" />' +
                `<button  type="submit"  id="ButtonAddCart"> <img class="imgCart" src="" alt="Cart"> </button>` +
                "</form>"



            tmp.getElementsByClassName("Title")[0].innerText = salad.Title;
            tmp.getElementsByClassName("PSelect")[0].innerText = salad.Ingredients;
            tmp.getElementsByClassName("img1")[0].setAttribute("src", salad.Img);
            tmp.getElementsByClassName("Price")[0].innerText = salad.Price;
            tmp.getElementsByClassName("imgCart")[0].setAttribute("src", salad.Cart)
            tmp.getElementsByClassName("Value0")[0].innerText = salad.Value0;
            tmp.getElementsByClassName("Value1")[0].innerText = salad.Value1;
            tmp.getElementsByClassName("Value2")[0].innerText = salad.Value2;
            tmp.getElementsByClassName("Value3")[0].innerText = salad.Value3;
            tmp.getElementsByClassName("inputID")[0].setAttribute("value", salad.id);
            tmp.getElementsByClassName("product-item")[0].addEventListener("submit", submitEvent1);


            container.appendChild(tmp);





        })
    })