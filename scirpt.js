let displayValue = ''; // Variable to store the display value

// Function to add numbers to the display
function addToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').value = displayValue;
}

// Function to perform basic math operations
function operate(op) {

    if (['+', '-', '*', '/'].includes(displayValue[displayValue.length - 1])) {
        displayValue = displayValue.slice(0, -1) + op;
    } else {
        displayValue += op;
    }
    document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculate() {

    if (['+', '-', '*', '/'].includes(displayValue[displayValue.length - 1])) {
        displayValue = displayValue.slice(0, -1);
    }
    let result = eval(displayValue);
    if (!isFinite(result)) {
        result = "Error: Divide by zero";
    }
    document.getElementById('display').value = result;
    displayValue = result.toString();
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        addToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        operate(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});