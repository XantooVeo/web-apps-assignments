// Example 1:
// Determines the appropriate greeting based on the current time
// and displays it on the webpage.
function setGreeting() {

    let now = new Date();

    let hours = now.getHours();

    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    }
    else if (hours < 18) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Evening!";
    }

    document.getElementById("greetingOutput").textContent = greeting;
}

// Runs the greeting function automatically when the page loads.
window.onload = function () {
    setGreeting();
};


// Example 2:
// Updates a section of the webpage when the button is clicked.
function setButtonText() {
    document.getElementById("buttonTextOutput").textContent =
        "Hello World!";
}


// Additional button example:
// Displays information about the website creator.
function setButtonTalk() {
    document.getElementById("buttonTalkOutput").textContent =
        "Hello I am Alex Corradino - The Creator";
}


// Displays the current time when the button is clicked.
function setButtonTime() {

    let now = new Date();

    document.getElementById("buttonTimeOutput").textContent =
        "Current Time: " + now.toLocaleTimeString();
}


// Example 3:
// Displays the current date and time using JavaScript.
function setButtonTextDate() {

    let now = new Date();

    document.getElementById("buttonTextDateOutput").textContent =
        now.toString();
}


// Example 4:
// Takes two numbers entered by the user, adds them together,
// and displays the result.
function addnumbers() {

    let num1 = parseInt(document.getElementById("userInput1").value);

    let num2 = parseInt(document.getElementById("userInput2").value);

    let result = num1 + num2;

    document.getElementById("userInputOutput").textContent =
        result;
}


// Example 5:
// Finds the length of a string entered by the user and displays
// the number of characters.
function stringLength() {

    let text =
        document.getElementById("stringInput").value;

    let length = text.length;

    document.getElementById("stringOutput").textContent =
        '"' + text + '" has ' + length + ' characters.';
}


// Example 6:
// Allows the user to show or hide the password
// by changing the input type.
function togglePassword() {

    let passwordBox =
        document.getElementById("passwordBox");

    if (passwordBox.type === "password") {
        passwordBox.type = "text";
    }
    else {
        passwordBox.type = "password";
    }
}


// Example 7:
// Changes the color and size of text when the button is clicked.
function changeStyle() {

    let styleText =
        document.getElementById("styleText");

    styleText.style.color = "blue";
    styleText.style.fontSize = "50px";
}


// Example 8:
// Toggles the visibility of an HTML element.
// The message can be hidden or shown repeatedly.
function toggleMessage() {

    let message =
        document.getElementById("messageBox");

    if (message.style.display === "none") {
        message.style.display = "block";
    }
    else {
        message.style.display = "none";
    }
}