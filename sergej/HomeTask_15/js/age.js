function age() {

    var inputeAge, min, max;

    inputeAge = prompt('Enter your age: ');
    min = 14;
    max = 90;

    if (inputeAge >= min && inputeAge <= max) {
        alert('Wellcome to our website!');
    } else {
        alert('Access to the website denied!');
    }

}