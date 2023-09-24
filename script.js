// script.js

function getFormvalue(event) {
    event.preventDefault(); // Prevent the default form submission

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (firstName && lastName) {
        alert("First Name: " + firstName + "\nLast Name: " + lastName);
    } else {
        alert("Please fill in both first name and last name fields.");
    }
}

var form1 = document.getElementById("form1");
form1.addEventListener("submit", getFormvalue);
