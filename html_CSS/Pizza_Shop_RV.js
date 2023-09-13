document.getElementById("Address").innerHTML =
    " <h3> Address: </h3> " +
    " Tony`s Pizza Factory <br> " +
    " 2122 N Clark str. <br> " +
    " Chicago, IL 60614 , USA <br> " +
    " <br>"

document.getElementById("About").innerHTML =
    "<h3> About US: </h3>" +
    "The Pizzeria is one Place I have been <br>" +
    "waiting to visit for a long time. The <br>" +
    "reason being their Restaurant pizza which <br>" +
    "absolutely blew me away - Jimmy"

document.getElementById("opening").innerHTML =
    "<h3>Opening Hours: </h3>" +
    "MOn-Thu: 11a.m.-23p.m.<br>" +
    "Fri.-Sat 11a.m.-24p.m.<br>" +
    "Saturday closed<br>" +
    "<br>"

document.getElementsByTagName("nav")[0].innerHTML =
    "<a href=Pizza-Shop.html> Home </a>" +
    "<a href=Pizza_Selection.html> Pizza</a>" +
    "<a href=Salad_Selections.html> Salad</a>" +
    "<a href=Soft_drinks_Selection.html> Soft drinks</a>" +
    "<a href=Feedback.html> Feedback</a>"

document.getElementById("Logo").innerHTML =
    "<img src=../Pictures/Logo.jpg height=5472 width=3648 alt=Logo/>"








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
                    "<div class=Title></div>" +
                    "<div class=PSelect></div>" +
                    "<img class=img1 src=/ alt='Test'/>" +
                    "<div class=Price></div>" +
                    "<button class=buttonCart> <img class=imgCart src=/ alt='Cart'/> </button>"



                tmp.getElementsByClassName("Title")[0].innerText = pizza.Title;
                tmp.getElementsByClassName("PSelect")[0].innerText = pizza.Ingredients;
                tmp.getElementsByClassName("img1")[0].setAttribute("src", pizza.Img);
                tmp.getElementsByClassName("Price")[0].innerText = pizza.Price;
                tmp.getElementsByClassName("imgCart")[0].setAttribute("src", pizza.Cart);


                container.appendChild(tmp);


             })
        })