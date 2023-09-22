let sessionId = "";


if ((document.cookie === '' || document.cookie == null)) {

    function setCookie(name, value, daysToLive) {
        const date = new Date();
        date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
        let expires = "expires" + date.toUTCString();
        document.cookie = ` ${name}${value}; ${expires}; path=/`
    }

    function generateSessionId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    sessionId = generateSessionId();

    setCookie("", sessionId, 30);
}
    console.log(document.cookie)





function submitEvent(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    console.log(formData.get('sizeP'))

    console.log(Object.fromEntries(formData).id)


    let ProductID = Object.fromEntries(formData).id;


    let jsonUrl = "";

    if (ProductID == 1 || ProductID == 2 || ProductID == 3 || ProductID == 4) {
        jsonUrl = "http://localhost:3000/pizzas"
    }

    if (ProductID == 5 || ProductID == 6 || ProductID == 7 || ProductID == 8) {
        jsonUrl = "http://localhost:3000/salads"
    }

    if (ProductID == 9 || ProductID == 10 || ProductID == 11 || ProductID == 12) {
        jsonUrl = "http://localhost:3000/Soft_drinks"
    }


    fetch(jsonUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {


            const targetSalad = data.find(salads => salads.id == ProductID)
            const targetPizza = data.find(pizzas => pizzas.id == ProductID)
            const targetSoft_drink = data.find(Soft_drinks => Soft_drinks.id == ProductID)

            if (targetSalad) {
                fetch("http://localhost:3000/Cart", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        USERID: document.cookie,
                        Option1: formData.get('dressing'),
                        Cart: targetSalad
                    })
                })
                    .then(response => {
                        return response.json();

                    })
            }

            else if (targetPizza) {
                fetch("http://localhost:3000/Cart", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        USERID: document.cookie,
                        Option1: formData.get('sizeP'),
                        Cart: targetPizza
                    })
                })
                    .then(response => {
                        return response.json();

                    })
            }

        else if (targetSoft_drink) {

                fetch("http://localhost:3000/Cart", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        USERID: document.cookie,
                        Option1: formData.get('size'),
                        targetSoft_drink,
                    })
                })
                    .then(response => {
                        return response.json();

                    })
            }




        })

}

