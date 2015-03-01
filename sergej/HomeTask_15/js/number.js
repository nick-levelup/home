function numb() {
    var inputeValue, num;

    inputeValue = prompt('Enter number: ')
    num = 100;
    inputeValue = parseInt(inputeValue);

    if (inputeValue > num) {
        alert('Your number is greater than ' + num + '!');
    } else if (inputeValue === num) {
        alert('Your number is equal to ' + num + '!');
    } else {
        alert('Your number is less than ' + num + '!');
    }
}