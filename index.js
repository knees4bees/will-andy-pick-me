var askQuestionInput = document.querySelector('.ask-question-input');
var getAnswerButton = document.querySelector('.get-answer-button');
var userQuestion = document.querySelector('.question');
var theAnswer = document.querySelector('.answer');

getAnswerButton.addEventListener('click', displayAnswer);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayAnswer() {
  event.preventDefault();
  var question = askQuestionInput.value;
  var answer = answers[getRandomIndex(answers)];
  userQuestion.innerText = question;
  theAnswer.innerText = answer;
}
