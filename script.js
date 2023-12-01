//Get references to login form and submit button
const login = document.getElementById("login");
const submit = document.getElementById("submit");

//Add an event listener to submit button
submit.addEventListener("click", (a) => {
    //Pervent default form submission behavior
    a.preventDefault();

    //Fetch entered username and password form the form
    const username = login.querySelector('input[type="text"]').value;
    const password = login.querySelector('input[type="password"]').value;

    //Check if the entered values are same with the ones stored
    if (username === "user" && password === "password") {
        //Display message saying login is successful if the values meet the ones those are stored
        alert("Login successful!");
        //Redirect to the home page 
        window.location.href = "index.html";
    } else {
        //Display an error message when the values are not the same as stored
        alert("You have entered the wrong username and password. Please try again!")
    }
})