
    // Send input data to a server

    const formE1 = document.getElementById("Feedback");

    formE1.addEventListener("submit", event => {
        event.preventDefault();


        const formData = new FormData(formE1);
        const data = Object.fromEntries(formData);


        fetch("http://localhost:3000/feedback", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

            .then(response => {
                return response.json();
            })


    })









    // Check Form validation

    const form = document.getElementById("Feedback")
    const messageContainer1 = document.getElementById("message-container1")
    const messageContainer2 = document.getElementById("message-container2")


    // Check Phone number validation

    const PhoneNumberInput = document.getElementById("phone_number")
    form.addEventListener("submit", (e) =>{

        let PNumber = PhoneNumberInput.value
        let errors1 = findErrors1(PNumber)


        if(errors1.length > 0){
            e.preventDefault()
            messageContainer1.innerText = errors1.join('. ')
            messageContainer1.classList.add("red-message")
            PhoneNumberInput.classList.add("red-input")
        }

        PhoneNumberInput.addEventListener("input", () =>{
            PhoneNumberInput.classList.remove("red-input")
            messageContainer1.innerText = ''
        })
    })

    function findErrors1(PNumber){
        let errorMessages = []

        if(PNumber === '' || PNumber == null){
            errorMessages.push("Phone Number is a mandatory information")
        }
         else if(!(PNumber.includes("+41"))){
            errorMessages.push("This is not a valid Phone Number")
        }
        return errorMessages
    }




    // Check Email Address validation

    const EMailInput = document.getElementById("email_address")

   form.addEventListener("submit", (x) =>{

       let EMail = EMailInput.value
       let errors2 = findErrors2(EMail)

   if(errors2.length > 0){
       x.preventDefault()
       messageContainer2.innerText = errors2.join('. ')
       messageContainer2.classList.add("red-message")
       EMailInput.classList.add("red-input")
       ButtonBlocked.classList.add("Button-blocked")
       ButtonBlocked.disabled = true;
   }

   EMailInput.addEventListener("input", () =>{
       EMailInput.classList.remove("red-input")
       messageContainer2.innerText = ''
       ButtonBlocked.classList.add("Button-blocked")
       ButtonBlocked.disabled = true;
   })


    function findErrors2(EMail){
        let errorMessages = []

        if(EMail === '' || EMail == null){
            errorMessages.push("Email address is a mandatory information")
        }
        else if(!(EMail.includes("@"))){
            errorMessages.push("This is not a valid E-mail Address")
        }
        return errorMessages
    }})




   // The button is blocked to prevent duplicate entries and reset form input

   const ButtonBlocked = document.getElementById("ButtonS")
   form.addEventListener("submit" , (y) => {

       if ( (messageContainer1.length > 2 ) && (messageContainer2.length >2))
       {

               y.preventDefault()
               ButtonBlocked.classList.add("Button-blocked");
               ButtonBlocked.disabled = true;
               document.getElementById("Feedback").reset();


       }

       form.addEventListener("input", () =>{
           ButtonBlocked.classList.remove("Button-blocked")
           ButtonBlocked.disabled = false;
       })
   })