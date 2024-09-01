const userInput = document.getElementById('user-input');
const clearButton = document.getElementById('clear-btn');
const checkButton = document.getElementById('check-btn');
clearButton.addEventListener('click', () => {
    userInput.value = '';
});
checkButton.addEventListener('click', () => {
    if (userInput.value.trim() === '') {
        alert('Please provide a phone number');
    }
});