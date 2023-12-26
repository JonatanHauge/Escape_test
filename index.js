// index.js
document.getElementById('codeInputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const userInput = document.getElementById('codeInput').value;
    if (validCodes.includes(userInput)) {
        window.location.href = 'subpage2.html'; // Redirect to subpage2.html
    } else {
        alert('Invalid code. Please try again.');
    }
});