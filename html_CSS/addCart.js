

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





function submitEvent1(event) {
    event.preventDefault();


    const formData = new FormData(event.target);



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

    console.log(formData.get('sizeP'))
    console.log(formData.get('sizeS'))
    console.log(formData.get('dressing'))

    fetch(jsonUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {


            const targetSalad = data.find(salads => salads.id == ProductID)
            const targetPizza = data.find(pizzas => pizzas.id == ProductID)
            const targetSoft_drink = data.find(Soft_drinks => Soft_drinks.id == ProductID)





            if (targetPizza) {
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


            else if (targetSalad) {
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


            else if (targetSoft_drink) {

                fetch("http://localhost:3000/Cart", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        USERID: document.cookie,
                        Option1: formData.get('sizeS'),
                        Cart: targetSoft_drink,
                    })
                })
                    .then(response => {
                        return response.json();

                    })
            }





        })

}



function submitEvent2(event) {
    event.preventDefault();


    const formData = new FormData(event.target);


    console.log(Object.fromEntries(formData).id)

    let ProductID = Object.fromEntries(formData).id;

    let jsonUrl = "http://localhost:3000/Cart"

    fetch(jsonUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            const targetProduct = data.find(Product => Product.id == ProductID)
           console.log(targetProduct)

            if (targetProduct) {
                fetch("http://localhost:3000/Cart", {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(targetProduct)
                })
                    .then(response => {
                        return response.json();

                    })
                    .then(data =>

                        console.log(data)
                    );
            }
        })

}






















/*

function submitEvent(event) {
    event.preventDefault();


    const formData = new FormData(event.target);


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

// SELECT ELEMENTS
    const productsEl = document.querySelector(".products");
    const cartItemsEl = document.querySelector(".cart-items");
    const subtotalEl = document.querySelector(".subtotal");
    const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

    fetch(jsonUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            let products = data


// RENDER PRODUCTS
            function renderProdcuts() {
                products.forEach((product) => {
                    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.Img}" alt="${product.Title}">
                    </div>
                    <div class="desc">
                        <h2>${product.Title}</h2>
                        <h2><small>$</small>${product.Price}</h2>
                        <p>
                            ${product.Ingredients}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
                });
            }

            renderProdcuts();

// cart array
            let cart = JSON.parse(localStorage.getItem("CART")) || [];
            updateCart();

// ADD TO CART
               function addToCart (ProductID){
                // check if prodcut already exist in cart
                if (cart.some((item) => item.id === ProductID)) {
                    changeNumberOfUnits("plus", ProductID);
                } else {
                    const item = products.find((product) => product.id === ProductID);

                    cart.push({
                        ...item,
                        numberOfUnits: 1,
                    });
                }

                updateCart();
            }

// update cart
            function updateCart() {
                renderCartItems();
                renderSubtotal();

                // save cart to local storage
                localStorage.setItem("CART", JSON.stringify(cart));
            }

// calculate and render subtotal
            function renderSubtotal() {
                let totalPrice = 0,
                    totalItems = 0;

                cart.forEach((item) => {
                    totalPrice += item.Price * item.numberOfUnits;
                    totalItems += item.numberOfUnits;
                });

                subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
                totalItemsInCartEl.innerHTML = totalItems;
            }

// render cart items
            function renderCartItems() {
                cartItemsEl.innerHTML = ""; // clear cart element
                cart.forEach((item) => {
                    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.Img}" alt="${item.Title}">
                <h4>${item.Title}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.Price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
                });
            }

// remove item from cart
            function removeItemFromCart(id) {
                cart = cart.filter((item) => item.id !== ProductID);

                updateCart();
            }

// change number of units for an item
            function changeNumberOfUnits(action, ProductID) {
                cart = cart.map((item) => {
                    let numberOfUnits = item.numberOfUnits;

                    if (item.id === ProductID) {
                        if (action === "minus" && numberOfUnits > 1) {
                            numberOfUnits--;
                        } else if (action === "plus" && numberOfUnits < item.instock) {
                            numberOfUnits++;
                        }
                    }

                    return {
                        ...item,
                        numberOfUnits,
                    };
                });

                updateCart();
            }
        })
*/
