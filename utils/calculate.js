export const calculate = (firstValue, secondValue, operator) => {
    firstValue = firstValue.replace(',', '.'); 
    secondValue = secondValue.replace(',', '.');

    console.log(firstValue, secondValue, operator);
    switch (operator) {
        case '+':
            return (parseFloat(firstValue) + parseFloat(secondValue)).toString();
        case '-':
            return (parseFloat(firstValue) - parseFloat(secondValue)).toString();
        case 'x':
            return (parseFloat(firstValue) * parseFloat(secondValue)).toString();
        case '/':
            return (parseFloat(firstValue) / parseFloat(secondValue)).toString();
        case '%':
            return (parseFloat(firstValue) / 100).toString();
        default:
            return '';
    }
};