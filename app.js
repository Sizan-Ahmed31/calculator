function calculate(num) {
    const inputBtn = document.getElementById('input').value;
    const total = inputBtn + num;
    const inputValue = document.getElementById('input').value = total;
    return inputValue
}

const equal = document.getElementById('equal-btn');
equal.addEventListener('click', function() {
    const equalNumber = document.getElementById('input').value;
    const result = eval(equalNumber);
    document.getElementById('input').value = result;
})

const equalBtn = document.getElementById('clear-btn');
equalBtn.addEventListener('click', function() {
    document.getElementById('input').value = "";
})