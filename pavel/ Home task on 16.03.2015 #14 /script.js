var random = getRandomInt(0, questions.length-1),
    question = questions[random].toLowerCase().split(''),
    hiddenWord = [];

for(var i = 0; i < question.length; i++){
    hiddenWord.push('_');
}

startGame();

function startGame(){
    console.log(question);
    while(true){
        console.log(hiddenWord);
        var answer = prompt('Буква или слово');
        
        if(answer === null){
            console.log('Вы вышли');
            break;
        }
        var checkAns = checkAnswer(question, answer, hiddenWord);
        
        if(checkAns === true){
            console.log(question + '\nВы выиграли');
            break;
        }
    }
}

function checkAnswer(question, answer, hiddenWord){
    answer = answer.toLowerCase();
        
    if(answer.length === 1){
        for(var i = 0; i < question.length; i++){
            if(question[i] === answer){
                hiddenWord[i] = answer;
            }
        }
    } else if(answer.length === question.length){
        return true;
    } else{
        console.log('Введите одну букву или целое слово');
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}