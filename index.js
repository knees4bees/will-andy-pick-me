var askQuestionInput = document.querySelector('.ask-question-input');
var getAnswerButton = document.querySelector('.get-answer-button');
var userQuestion = document.querySelector('.question');
var theAnswer = document.querySelector('.answer');
var eightBall = document.querySelector('.eight-ball');
var clearButton = document.querySelector('.clear-button');

getAnswerButton.addEventListener('click', displayAnswer);
clearButton.addEventListener('click', clearResults);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayAnswer() {
  event.preventDefault();
  var question = askQuestionInput.value;
  var answer = answers[getRandomIndex(answers)];
  userQuestion.innerText = `"${question}?"`;
  theAnswer.innerText = answer;
  eightBall.classList.toggle('hidden');
  userQuestion.classList.toggle('hidden');
  theAnswer.classList.toggle('hidden');
  askQuestionInput.value = '';
  clearButton.classList.toggle('red');
}

function clearResults() {
  if (!userQuestion.classList.contains('hidden') && !theAnswer.classList.contains('hidden')) {
    userQuestion.classList.toggle('hidden');
    theAnswer.classList.toggle('hidden');
    clearButton.classList.toggle('red');
    eightBall.classList.toggle('hidden');
  }
}
