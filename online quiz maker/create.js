const questionsContainer = document.getElementById('questions-container');
const addQuestionButton = document.getElementById('add-question');
const submitQuizButton = document.getElementById('submit-quiz');

let questionCount = 0;

addQuestionButton.addEventListener('click', () => {
  questionCount++;
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  questionDiv.innerHTML = `
    <h3>Question ${questionCount}</h3>
    <input type="text" placeholder="Enter your question" class="question-input">
    <div class="answers-container"></div>
    <button class="add-answer">Add Answer</button>
  `;
  questionsContainer.appendChild(questionDiv);

  const answersContainer = questionDiv.querySelector('.answers-container');
  const addAnswerButton = questionDiv.querySelector('.add-answer');

  let answerCount = 0;

  addAnswerButton.addEventListener('click', () => {
    answerCount++;
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.innerHTML = `
      <input type="text" placeholder="Enter answer ${answerCount}" class="answer-input">
      <input type="radio" name="correct-answer-${questionCount}" class="correct-answer-radio">
      <label>Correct Answer</label>
    `;
    answersContainer.appendChild(answerDiv);
  });
});

submitQuizButton.addEventListener('click', () => {
  const questions = document.querySelectorAll('.question');
  const quiz = [];

  questions.forEach((questionElement, index) => {
    const question = questionElement.querySelector('.question-input').value;
    const answers = [];
    const answerInputs = questionElement.querySelectorAll('.answer-input');
    const correctAnswerRadios = questionElement.querySelectorAll('.correct-answer-radio');

    answerInputs.forEach((answerInput, answerIndex) => {
      const answerText = answerInput.value;
      const isCorrect = correctAnswerRadios[answerIndex].checked;
      answers.push({ answer: answerText, correct: isCorrect });
    });

    quiz.push({ question, answers });
  });

  console.log('Generated Quiz:', quiz);
  // Here you could send the quiz object to a server or process it further
  // For simplicity, we just log it to the console
});
