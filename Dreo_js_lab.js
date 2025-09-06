// Activity 1: Variables and Functions
function runActivity1() {
    const name = "Ailen";
    const age = 30;
    const greeting = greetUser(name, age);
    document.getElementById('output-1').textContent = greeting;
    logToConsole('Activity 1 executed successfully');
}

function greetUser(name, age) {
    return `Hello, I am ${name} and I am ${age} years old.`;
}

// Activity 2: DOM Manipulation
function changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    logToConsole(`Previous background color: ${document.body.style.backgroundColor || '#6a11cb'}`);
    document.body.style.background = randomColor;
    document.getElementById('color-display').textContent = `Current color: ${randomColor}`;
    document.getElementById('color-display').style.backgroundColor = randomColor;
    document.getElementById('color-display').style.color = '#ffffff';
    logToConsole(`New background color: ${randomColor} - Enjoy the fresh look!`);
}

// Activity 3: Debugging and Enhancement
function testDebugging() {
    logToConsole('Testing debugging functionality...');
    logToConsole('Generating random numbers...');
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    logToConsole(`Generated numbers: ${num1} and ${num2}`);
    const sum = num1 + num2;
    logToConsole(`Sum of numbers: ${sum} - Great job with the calculation!`);
    logToConsole('Debugging test completed successfully!');
}

// Helper function for console logs
function logToConsole(message) {
    const consoleOutput = document.getElementById('console-output');
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `<span class="log-timestamp">[${timestamp}]</span>${message}`;
    consoleOutput.appendChild(logEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
    console.log(message);
}

// Initialize logs
document.addEventListener('DOMContentLoaded', function() {
    logToConsole('Page loaded. Activities are ready to run.');
});
