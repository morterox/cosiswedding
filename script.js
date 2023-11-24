const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const formContainer = document.getElementById('form-container')
const formFullName = document.getElementById('form-full-name')

let shuffledQuestions, currentQuestionIndex, total = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    if (!(formFullName.value.length > 5)) {
        alert('Please write your full name before starting you fool')
    } else {
        startButton.classList.add('hide')
        formContainer.classList.add('hide')
        shuffledQuestions = randomizeList(questions)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
    }
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    randomizeList(question.answers).forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function randomizeList(list) {
    return list.sort(() => Math.random() - .5)
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    // setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        // nextButton.classList.remove('hide')
        currentQuestionIndex++
        setNextQuestion()
    } else {
        //TODO behavior to SEND FORM
        questionElement.innerText = 'Thanks for being part of our party '+formFullName.value+', cross your fingers, maybe you won!'
        console.log(formFullName.value)
        console.log(total)
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    resetState()
    if (correct) {
        //TODO behavior for correct
        total++
        // element.classList.add('correct')
    } else {
        //TODO behavior for wrong
        // element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: '¿Cuantos años hace que se conocen los novios?',
        answers: [
            {text: '2', correct: true},
            {text: '4', correct: true},
            {text: '6', correct: false}
        ]
    },
    {
        question: '¿Dónde se conoció la pareja por primera vez?',
        answers: [
            {text: 'En un cumpleaños', correct: false},
            {text: 'Ok Cupid', correct: true},
            {text: 'Disney', correct: false},
            {text: 'Shabat', correct: false}
        ]
    },
    {
        question: "¿Cómo se llama su Perrita?",
        answers: [
            {text: 'Cthulu', correct: false},
            {text: 'Maia', correct: true},
            {text: 'Nami', correct: false},
            {text: 'Bicho', correct: false}
        ]
    }
]