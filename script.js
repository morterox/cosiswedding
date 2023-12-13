const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const formContainer = document.getElementById('form-container')
const formName = document.getElementById('form-name')
const formLastName = document.getElementById('form-lastname')
const codeElement = document.getElementById('final-code')

let shuffledQuestions, currentQuestionIndex, total, questionNumber, totalcode

const cosis = ['100','99','98','97','96','95','94','93','92','91','90','i','2','3','4','5','o','6','7','8','9','u','10','11','12','13','14','15','a','16','17','18','e','19','20']

startButton.addEventListener('click', startGame)

formName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        formLastName.focus()
    }
});

formLastName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        startButton.click();
    }
});

function startGame() {
    if (!(formName.value.length > 2) || !(formLastName.value.length > 2)) {
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
        //TODO match codes con total
        codes.forEach(codeblock => {
            if (codeblock.total == total){
                totalcode = codeblock.code
            }
        })

        questionElement.innerText = 'Gracias por participar de nuestra fiesta '+formName.value+'. Anota tu código, tal vez ganaste una sorpresa!'
        codeElement.innerText = 'TÚ CÓDIGO ES: ' + totalcode
        codeElement.classList.remove('hide')
        // console.log(formName.value)
        // console.log(total)
        // startButton.innerText = 'Restart'
        // startButton.classList.remove('hide')
    }
}

function behaviorForOption(correct) {
    resetState()
    if (cosis.includes(correct)) {
        total++
    } else {
        //TODO behavior for wrong
    }
}

const questions = [
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
            {text: 'Pani', correct: 'a'},
            {text: 'Kentucky', correct: 'c'},
            {text: 'Starbucks', correct: 'v'},
            {text: 'Kansas', correct: 'p'}
        ]
    },
    {
        question: "¿Cuál es el superhéroe favorito de Martín?",
        answers: [
            {text: 'Spider-Man', correct: 'e'},
            {text: 'Iron Man', correct: 'r'},
            {text: 'Batman', correct: 'j'},
            {text: 'Superman', correct: 'k'}
        ]
    },
    {
        question: "¿Qué gusto de helado no puede soportar Martín?",
        answers: [
            {text: 'Sambayón', correct: 'o'},
            {text: 'Dulce de Leche', correct: 'd'},
            {text: 'Menta Granizada', correct: 's'},
            {text: 'Kinotos al Whisky', correct: 'r'}
        ]
    },
    {
        question: "¿Qué idiomas habla fluído Eileen?",
        answers: [
            {text: 'Inglés, Español, Francés, Portugués', correct: 'a'},
            {text: 'Inglés, Español, Italiano, Francés', correct: 'd'},
            {text: 'Inglés, Español, Italiano, Portugués', correct: 'y'},
            {text: 'Inglés, Español, Francés, Hebreo', correct: 'k'}
        ]
    },
    {
        question: "¿Qué talla de zapato tiene Martín?",
        answers: [
            {text: '46/47', correct: 'o'},
            {text: '42/43', correct: 'h'},
            {text: '44/45', correct: 'y'},
            {text: '48/49', correct: 'p'}
        ]
    },
    {
        question: "¿Qué pide Eileen en Starbucks?",
        answers: [
            {text: 'Chai Latte', correct: 'i'},
            {text: 'Frapuccino', correct: 'f'},
            {text: 'Té de Hibiscus', correct: 'g'},
            {text: 'Café del día', correct: 'b'}
        ]
    },
    {
        question: "¿Cuál de estas sagas prefiere Eileen?",
        answers: [
            {text: 'Artemis Foul', correct: 'm'},
            {text: 'Harry Potter', correct: 'u'},
            {text: 'Lord of the Rings', correct: 'p'},
            {text: 'The Hunger Games', correct: 'l'}
        ]
    }
]

const codes = [
    {code: 'abanico', total: 0},
    {code: 'banana', total: 1},
    {code: 'congo', total: 2},
    {code: 'duende', total: 3},
    {code: 'elefante', total: 4},
    {code: 'fanatico', total: 5},
    {code: 'gelatina', total: 6},
    {code: 'helado', total: 7},
    {code: 'inteligente', total: 8},
    {code: 'jodido', total: 9},
    {code: 'kilometros', total: 10},
    {code: 'lindura', total: 11},
    {code: 'monstruo', total: 12},
    {code: 'navegar', total: 13},
    {code: 'ornitorrinco', total: 14},
    {code: 'pecera', total: 15},
    {code: 'quilombo', total: 16},
    {code: 'resistencia', total: 17},
    {code: 'silbato', total: 18},
    {code: 'tambor', total: 19},
    {code: 'uvas', total: 20},
    {code: 'vinito', total: 21},
    {code: 'walkman', total: 22},
    {code: 'xuxa', total: 23},
    {code: 'yuyo', total: 24},
    {code: 'zen', total: 25}
]