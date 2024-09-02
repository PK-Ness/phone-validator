const userInput = document.getElementById('user-input');
const clearButton = document.getElementById('clear-btn');
const checkButton = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');
clearButton.addEventListener('click', () => {
    userInput.value = '';
    resultsDiv.innerHTML = '';
});
checkButton.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();
    const usPhoneNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    if (userInput.value.trim() === '') {
        alert('Please provide a phone number');
    } else if (usPhoneNumberPattern.test(phoneNumber)) {
     resultsDiv.innerHTML = `Valid US number: ${phoneNumber}`;
     resultsDiv.className = '';
            }else {
resultsDiv.innerHTML = `Invalid US number: ${phoneNumber}`;
                resultsDiv.className = 'invalid'; 
            }
            if (isNaN(phoneNumber)) {
                resultsDiv.innerHTML = `Invalid Input. Numbers only.`;
                        resultsDiv.className = 'invalid';
            }
});
