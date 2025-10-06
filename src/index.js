// Get references to HTML elements
const myButton = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');
const messageParagraph2 = document.getElementById('message2');

const inputIdField  = document.getElementById('idInput');


// Add an event listener to the button
myButton.addEventListener('click', function() {

    messageParagraph.textContent = 'Your entered button id is: ' + inputIdField.value;
    messageParagraph.style.color = 'blue'; // Example of changing style

    // Create React component button - testing integration
    messageParagraph2.style.color = 'green';
    messageParagraph2.textContent = 'Generate React Components Here';
});

