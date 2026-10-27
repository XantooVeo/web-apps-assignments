function setGreeting() {

    let now = new Date(); //build in class in JavaScript
    console.log("I am printing Time: " + now.getHours());

    let hours = now.getHours();
    if (hours < 12) 
    {
        greeting = "Good Morning!";
    } else if (hours < 18) 
    {
        greeting = "Good Afternoon!";
    } else 
    {
        greeting = "Good Evening!";
    }

    console.log(greeting)
    document.getElementById("greetingOutput").textContent = greeting;
}

window.onload = function() {
    setGreeting();
}

function setButtonText() {
    document.getElementById("buttonTextOutput").textContent = "Hello World - I am learning Javascript";
}
function setButtonTalk() {
    document.getElementById("buttonTalkOutput").textContent = "Hello I am Alex Corradino - The Creator";
}
function setButtonTime() {
    let now = new Date();
    document.getElementById("buttonTimeOutput").textContent = "Current Time: " + now.toLocaleTimeString();
}
function setButtonTextDate() {
    let now = new Date();
    document.getElementById("buttonTextDateOutput").textContent = "Current Date: " + now.toLocaleDateString();
}
function addnumbers() {
    let num1 = parseInt(document.getElementById("userInput1").value);
    let num2 = parseInt(document.getElementById("userInput2").value);
    let result = num1 + num2;
    document.getElementById("userInputOutput").textContent = "Sum: " + result;
}
function addnumbers2() {
    let num1 = parseInt(document.getElementById("userInput1").value);
    let num2 = parseInt(document.getElementById("userInput2").value);
    let result = num1 + num2;
    document.getElementById("userInputOutput").textContent = "Sum: " + result;
}
