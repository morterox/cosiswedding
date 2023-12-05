const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const formContainer = document.getElementById('form-container')
const formFullName = document.getElementById('form-full-name')

let shuffledQuestions, currentQuestionIndex, total, questionNumber

const vocals = ['a','e','i','o','u']

startButton.addEventListener('click', startGame)
// formFullName.addEventListener('blur', startGame)

formFullName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      startButton.click();
    }
});

function startGame() {
    if (!(formFullName.value.length > 5)) {
        alert('Escriba su nombre completo por favor')
    } else {
        questionNumber = 0
        total = 0
        startButton.classList.add('hide')
        formContainer.classList.add('hide')
        shuffledQuestions = randomizeList(questions)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
    }
}

function setNextQuestion() {
    questionNumber++
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = questionNumber + '. ' + question.question
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
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correctCheck = selectedButton.dataset.correct
    behaviorForOption(correctCheck)
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        currentQuestionIndex++
        setNextQuestion()
    } else {
        //TODO behavior to SEND FORM
        questionElement.innerText = 'Gracias por participar de nuestra fiesta '+formFullName.value+'. Cruza los dedos, tal vez ganaste con: ' + total + ' puntos!'
        console.log(formFullName.value)
        console.log(total)
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function behaviorForOption(correct) {
    resetState()
    //  if (correct) * when correct were boolean
    if (vocals.includes(correct)) {
        //TODO behavior for correct
        total++
    } else {
        //TODO behavior for wrong
    }
}

const questions = [
    {
        question: '¿Cuantos años hace que se conocen los novios?',
        answers: [
            {text: '2', correct: 'f'},
            {text: '4', correct: 'a'},
            {text: '6', correct: 'g'},
            {text: '7', correct: 'y'}
        ]
    },
    {
        question: '¿Dónde se conoció la pareja por primera vez?',
        answers: [
            {text: 'Una fiesta', correct: 'b'},
            {text: 'Ok Cupid', correct: 'a'},
            {text: 'Disney', correct: 'c'},
            {text: 'Shabat', correct: 'p'}
        ]
    },
    {
        question: "¿Cómo se llama su Perrita?",
        answers: [
            {text: 'Cthulu', correct: 't'},
            {text: 'Maia', correct: 'a'},
            {text: 'Nami', correct: 'r'},
            {text: 'Bicho', correct: 'f'}
        ]
    },
    {
        question: "¿Quién se queda despierto hasta mas tarde?",
        answers: [
            {text: 'Martin', correct: 'g'},
            {text: 'Eileen', correct: 'u'}
        ]
    },
    {
        question: "¿Cuál es la película favorita de la pareja?",
        answers: [
            {text: 'Diario de una Pasión', correct: 'w'},
            {text: 'About Time', correct: 'i'},
            {text: 'Loco por Mary', correct: 'q'},
            {text: 'La La Land', correct: 'n'}
        ]
    },
    {
        question: "¿Cuál es la banda favorita de Martín?",
        answers: [
            {text: 'Nickelback', correct: 'e'},
            {text: 'Fall Out Boy', correct: 'y'},
            {text: 'Attaque 77', correct: 't'},
            {text: 'Los Piojos', correct: 'w'}
        ]
    },
    {
        question: "¿Cuál es el apodo de la pareja?",
        answers: [
            {text: 'Cosis', correct: 'a'},
            {text: 'Bubus', correct: 'y'},
            {text: 'Babies', correct: 'g'},
            {text: 'Yugus', correct: 'n'}
        ]
    },
    {
        question: "¿Cómo se llaman los padres de Eileen?",
        answers: [
            {text: 'Leda / Julio', correct: 'a'},
            {text: 'Raquel / Isaac', correct: 'b'},
            {text: 'Mirta / Roberto', correct: 't'},
            {text: 'Sandra / Marcelo', correct: 'k'}
        ]
    },
    {
        question: "¿Cómo se llaman los padres de Martín?",
        answers: [
            {text: 'Graciela / Ricardo', correct: 'f'},
            {text: 'Liliana / Ernesto', correct: 'u'},
            {text: 'Adriana / Victor', correct: 't'},
            {text: 'Silvia / Alberto', correct: 'm'}
        ]
    },
    {
        question: "¿Cuál es el juego de mesa favorito de la pareja?",
        answers: [
            {text: 'Yinsh', correct: 'i'},
            {text: 'Dixit', correct: 't'},
            {text: 'T.E.G', correct: 'r'},
            {text: 'Coup', correct: 'j'}
        ]
    },
    {
        question: "¿Quién es el mejor conductor?",
        answers: [
            {text: 'Martin', correct: 'c'},
            {text: 'Eileen', correct: 'o'}
        ]
    },
    {
        question: "¿Qué hace Eileen en todos los lugares nuevos que visita?",
        answers: [
            {text: 'El puente', correct: 'i'},
            {text: 'Shopping', correct: 't'},
            {text: 'Duerme', correct: 'r'},
            {text: 'Busca Ardillas', correct: 'n'}
        ]
    },
    {
        question: "¿Quién tiene mejor sentido de orientación?",
        answers: [
            {text: 'Eileen', correct: 'i'},
            {text: 'Martín', correct: 't'}
        ]
    },
    {
        question: "¿Dónde se pusieron de novios?",
        answers: [
            {text: 'Cumpleños de Alexia 2019', correct: 'i'},
            {text: 'Panamá 2020', correct: 't'},
            {text: 'Cita en pandemia 2020', correct: 'y'},
            {text: 'Camas saltarinas 2019', correct: 'w'}
        ]
    },
    {
        question: "¿Quién se roba las sábanas?",
        answers: [
            {text: 'Eileen', correct: 'p'},
            {text: 'Martín', correct: 'u'},
            {text: 'Maia', correct: 'w'}
        ]
    },
    {
        question: "¿A dónde fueron para su primera cita?",
        answers: [
            {text: 'Pani', correct: 'i'},
            {text: 'Kentucky', correct: 'f'},
            {text: 'Starbucks', correct: 'g'},
            {text: 'Kansas', correct: 'b'}
        ]
    },
    {
        question: "¿Cuál es el superhéroe favorito de Martín?",
        answers: [
            {text: 'Spider-Man', correct: 'i'},
            {text: 'Iron Man', correct: 'f'},
            {text: 'Batman', correct: 'g'},
            {text: 'Superman', correct: 'b'}
        ]
    },
    {
        question: "¿Qué gusto de helado no puede soportar Martín?",
        answers: [
            {text: 'Sambayón', correct: 'i'},
            {text: 'Dulce de Leche', correct: 'f'},
            {text: 'Menta Granizada', correct: 'g'},
            {text: 'Kinotos al Whisky', correct: 'b'}
        ]
    },
    {
        question: "¿Qué idiomas habla fluído Eileen?",
        answers: [
            {text: 'Inglés, Español, Francés, Portugués', correct: 'i'},
            {text: 'Inglés, Español, Italiano, Francés', correct: 'f'},
            {text: 'Inglés, Español, Italiano, Portugués', correct: 'g'},
            {text: 'Inglés, Español, Francés, Hebreo', correct: 'b'}
        ]
    },
    {
        question: "¿Qué talla de zapato tiene Martín?",
        answers: [
            {text: '46/47', correct: 'i'},
            {text: '42/43', correct: 'f'},
            {text: '44/45', correct: 'g'},
            {text: '48/49', correct: 'b'}
        ]
    }
]