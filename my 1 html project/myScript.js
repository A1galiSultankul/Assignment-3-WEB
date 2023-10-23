// Accessing the input box and the list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-conteiner"); // Correct the id spelling here

// Function to add a task to the list
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!"); // Alert the user if the input is empty
    } else {
        let li = document.createElement("li"); // Creating a list item element
        li.innerHTML = inputBox.value; // Setting the inner HTML of the list item
        listContainer.appendChild(li); // Appending the list item to the list container
        let span = document.createElement("span"); // Creating a span element
        span.innerHTML = "\u00d7"; // Setting the content of the span to the multiplication symbol
        li.appendChild(span); // Appending the span to the list item
    }
    inputBox.value = ""; // Clearing the input box after the task is added
    saveData(); // Saving the data to local storage
}

// Adding an event listener to the list container for handling task completion or deletion
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggling the 'checked' class on the list item
        saveData(); // Saving the updated data to local storage
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Removing the parent element (list item) of the clicked span
        saveData(); // Saving the updated data to local storage
    }
}, false);

// Function to save the list data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Storing the list container's HTML to local storage
}

// Function to display the tasks stored in local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // Getting and displaying the data from local storage
}
showTask();

// Function to validate the form on submission
function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var hasNumber = /\d/.test(name); // Regular expression to check for numbers

    // Checking for empty input fields and providing appropriate feedback
    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill out all the fields.'); // Alerting the user to fill out all the fields
    } else if (hasNumber) {
        alert('Name cannot contain numbers. Please enter a valid name.'); // Alerting the user if the name contains numbers
    } else {
        alert('Form submitted successfully. Thank you!'); // Alerting the user that the form was submitted successfully
        document.getElementById('myForm').reset(); // Resetting the form fields
    }
}

// Function to submit the user's idea
function submitIdea(event) {
    event.preventDefault();
    var idea = document.getElementById('idea').value;

    // Checking for an empty idea input and providing appropriate feedback
    if (idea.trim() === '') {
        alert('Please provide your idea before submitting.'); // Alerting the user to provide an idea before submission
    } else {
        alert('Idea submitted successfully. Thank you!'); // Alerting the user that the idea was submitted successfully
        document.getElementById('ideaForm').reset(); // Resetting the idea form field
    }
}
// ... (continued in the next message)
