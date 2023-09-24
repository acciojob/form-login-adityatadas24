
    //Write your code here
	   function getFormvalue() {
            // Access the form element by its ID
            var form = document.getElementById("form1");

            // Access the first name and last name input elements by their IDs
            var firstNameInput = document.getElementById("firstName");
            var lastNameInput = document.getElementById("lastName");

            // Get the values of the first name and last name inputs
            var firstName = firstNameInput.value;
            var lastName = lastNameInput.value;

            // Check if the inputs are not empty
            if (FirstName !== "" && LastName !== "") {
                // Display the first and last name using an alert
                alert("First Name: " + FirstName + "\nLast Name: " + LastName);
            } else {
                alert("Please fill in both first name and last name fields.");
            }

            // Prevent the default form submission behavior
            return false;
        }

        // Add an event listener to the form to call getFormvalue() when submitted
        var form = document.getElementById("form1");
        form.addEventListener("submit", getFormvalue);
	

}
