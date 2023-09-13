
    const formE1 = document.getElementById("Feedback");

    formE1.addEventListener('submit', (event) => {
    event.preventDefault();


    const formData = new FormData(formE1);
    const data = Object.fromEntries(formData);



    formData.forEach((value, key) => {
        data[key] = value;

    fetch("dbFeedback.json", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)


    })
