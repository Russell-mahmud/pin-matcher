function getPin() {
    const pin = Math.round(Math.random() * 10000)

    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('3 digit founded');
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}