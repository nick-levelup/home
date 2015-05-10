var number,
    res,
    points = 0;

startGame();

function startGame () {
    var random = getRandomInt(1, 20),
        count = 0;

    console.log(random);

    while(true) {
        number = prompt('Введите число', '');

        if (number === null) {
            alert('Вы вышли');
            break;
        };

        if (isNumeric(number) === false) {
            alert('Попробуй еще раз');
            continue;
        }
        if (+number > 20 || +number < 1) {
            alert('Число должо быть от 1 до 20');
            continue;
        }

        getResult(number, random);

        if (+number === random) {
            alert('Угадал');
            random = getRandomInt(1, 20);
        };

        console.log(points);

        if (points >= 50) {
            alert('Результат = ' + points + '\nК-во попыток = ' + count);					break;
        };

        count++;
    }
}

function getResult (num, rand) {
    res = num - rand

    if (res === 0) {
        points += 20;
    } else if (res <= 1 || res >= -1) {
        points += 15;
    } else if (res <= 3 || res >= -3) {
        points += 10;
    } else if (res <= 5 || res >= -5) {
        points += 3;
    } else if (res <= 10 || res >= -10) {
        points += 1;
    } else{
        points += 0;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}