let result = document.getElementById('heading');

function palindromeChecker() {
    let getInputValue = document.getElementById('input').value.toLowerCase();
    getInputValue = getInputValue.trim()
    let reverse = '';

    for (let i = getInputValue.length - 1; i >= 0; i--) {
        reverse += getInputValue[i];
    }

    if (reverse === getInputValue && getInputValue !== "") {
        result.innerHTML = `"${getInputValue}" is a Palindrome ✅`;
    } else {
        result.innerHTML = `"${getInputValue}" is NOT a Palindrome ❌`;
    }
}
