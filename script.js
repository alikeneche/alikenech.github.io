function calculateSquare() {
    const input = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    if (input.trim() === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    const number = parseFloat(input);

    if (isNaN(number)) {
        // Check if input is a symbol (non-alphanumeric)
        if (/[^0-9]/.test(input)) {
            window.location.href = "https://www.facebook.com";
        } else {
            result.textContent = "Not acceptable. Please enter a valid number.";
        }
    } else {
        const square = number * number;
        result.textContent = `The square of ${number} is ${square}.`;
    }
}

