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

window.onload = function () {
    setGreeting();
};

function setButtonText() {
    document.getElementById("buttonTextOutput").textContent =
        "Hello World!";
}

function setButtonTalk() {
    document.getElementById("buttonTalkOutput").textContent =
        "Hello I am Alex Corradino - The Creator";
}

function setButtonTime() {
    let now = new Date();

    document.getElementById("buttonTimeOutput").textContent =
        "Current Time: " + now.toLocaleTimeString();
}

function setButtonTextDate() {
    let now = new Date();

    document.getElementById("buttonTextDateOutput").textContent =
        now.toString();
}

function addnumbers() {

    let num1 = parseInt(document.getElementById("userInput1").value);

    let num2 = parseInt(document.getElementById("userInput2").value);

    let result = num1 + num2;

    document.getElementById("userInputOutput").textContent =
        result;
}

function stringLength() {

    let text =
        document.getElementById("stringInput").value;

    let length = text.length;

    document.getElementById("stringOutput").textContent =
        '"' + text + '" has ' + length + ' characters.';
}

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

function changeStyle() {

    let styleText =
        document.getElementById("styleText");

    styleText.style.color = "blue";
    styleText.style.fontSize = "50px";
}

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