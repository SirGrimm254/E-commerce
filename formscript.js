function validateRange(input, min, max) {
    let value = input.value.replace(/\D/g, '');
    if(value !== "") {
        let numValue = parseInt(value, 10);
        if (numValue < min) input.value = min;
        if (numValue > max) input.value = max;
        input.value = numValue;
    }
}

function isNumber(event) {
    return event.charCode >= 48 && event.charCode <= 57;
}