function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;

    // Replace sin, cos, tan with custom handlers
    expression = expression.replace(/sin\(([^)]+)\)/g, 'Math.sin(degToRad($1))');
    expression = expression.replace(/cos\(([^)]+)\)/g, 'Math.cos(degToRad($1))');
    expression = expression.replace(/tan\(([^)]+)\)/g, 'Math.tan(degToRad($1))');

    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
