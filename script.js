const questions = [
    // Dificultad 1
    [
        {
            question: "¿Qué es el derecho penal?",
            answers: [
                "Es la rama del derecho que establece y regula el castigo de los delitos o infracciones.",
                "Es el conjunto de normas jurídicas que determinan los delitos y las penas que corresponden a cada uno.",
                "Es la disciplina que estudia las normas penales y su aplicación.",
                "Es la parte del derecho que se encarga de definir las conductas ilícitas y establecer las sanciones.",
                "Es el sistema de normas que regula la potestad punitiva del Estado."
            ],
            correct: 0
        },
        {
            question: "¿Cuál es el objetivo del derecho penal?",
            answers: [
                "Proteger bienes jurídicos fundamentales.",
                "Mantener el orden social.",
                "Castigar conductas delictivas.",
                "Prevenir la comisión de delitos.",
                "Rehabilitar a los delincuentes."
            ],
            correct: 0
        },
        {
            question: "¿Qué es un delito?",
            answers: [
                "Una conducta punible por la ley.",
                "Una acción u omisión que está prohibida por el derecho penal.",
                "Un acto que viola una norma jurídica penal.",
                "Una infracción de una ley que merece una pena.",
                "Un comportamiento contrario a las normas establecidas que conlleva una sanción penal."
            ],
            correct: 0
        },
        {
            question: "¿Qué diferencia hay entre delito y falta?",
            answers: [
                "El delito es más grave que la falta.",
                "La falta conlleva sanciones menos severas que el delito.",
                "Los delitos suelen requerir intencionalidad, mientras que las faltas pueden ser negligentes.",
                "Las penas por faltas son menores que las impuestas por delitos.",
                "Las faltas afectan en menor medida el orden social que los delitos."
            ],
            correct: 0
        },
        {
            question: "Caso: Un individuo roba un supermercado y es detenido en el acto. ¿Qué tipo de delito es este?",
            answers: [
                "Robo.",
                "Hurto agravado.",
                "Apropiación indebida.",
                "Fraude.",
                "Estafa."
            ],
            correct: 0
        }
    ],
    // Dificultad 2
    [
        {
            question: "¿Qué es la imputabilidad penal?",
            answers: [
                "La capacidad de una persona para ser considerada responsable de un delito.",
                "La atribución de un delito a una persona determinada.",
                "La cualidad que permite considerar a alguien autor de una conducta delictiva.",
                "La aptitud de una persona para ser sancionada penalmente.",
                "La posibilidad de atribuir una conducta delictiva a una persona."
            ],
            correct: 0
        },
        {
            question: "¿Qué es el dolo en derecho penal?",
            answers: [
                "La intención de cometer un delito.",
                "El conocimiento y voluntad de realizar una conducta delictiva.",
                "La determinación consciente de realizar una acción ilícita.",
                "La actitud deliberada de infringir la ley penal.",
                "El propósito claro y directo de cometer un acto delictivo."
            ],
            correct: 0
        },
        {
            question: "¿Qué diferencia hay entre dolo y culpa?",
            answers: [
                "El dolo implica intención, la culpa no.",
                "La culpa es una negligencia o imprudencia, el dolo es deliberado.",
                "El dolo es una acción consciente, la culpa es un descuido.",
                "La culpa no busca un resultado delictivo, el dolo sí.",
                "En el dolo hay intención de causar daño, en la culpa no."
            ],
            correct: 0
        },
        {
            question: "Caso: Un conductor, bajo los efectos del alcohol, atropella a un peatón causando su muerte. ¿Qué tipo de delito es este?",
            answers: [
                "Homicidio imprudente.",
                "Homicidio doloso.",
                "Lesiones graves.",
                "Homicidio preterintencional.",
                "Conducción temeraria con resultado de muerte."
            ],
            correct: 0
        },
        {
            question: "¿Qué es la presunción de inocencia?",
            answers: [
                "El derecho de todo acusado a ser considerado inocente hasta que se demuestre lo contrario.",
                "La garantía procesal que protege a los imputados.",
                "El principio que establece que la carga de la prueba recae en la acusación.",
                "La base del sistema penal acusatorio.",
                "El fundamento del derecho a un juicio justo."
            ],
            correct: 0
        }
    ],
    // Dificultad 3
    [
        {
            question: "¿Qué es la teoría del delito?",
            answers: [
                "Un conjunto de principios que explican la estructura del delito.",
                "Un marco conceptual para analizar las conductas delictivas.",
                "Un sistema teórico que clasifica los elementos constitutivos del delito.",
                "Una herramienta doctrinal para la aplicación del derecho penal.",
                "Un enfoque sistemático para entender y aplicar las normas penales."
            ],
            correct: 0
        },
        {
            question: "¿Qué son las circunstancias atenuantes y agravantes?",
            answers: [
                "Factores que modifican la responsabilidad penal.",
                "Elementos que pueden disminuir o aumentar la pena.",
                "Condiciones que afectan la gravedad del delito.",
                "Circunstancias que el juez debe considerar al determinar la sanción.",
                "Aspectos que influyen en la cuantificación de la pena."
            ],
            correct: 0
        },
        {
            question: "Caso: Un individuo planea y ejecuta un asesinato con premeditación y alevosía. ¿Qué tipo de delito es este?",
            answers: [
                "Homicidio calificado.",
                "Asesinato en primer grado.",
                "Homicidio agravado.",
                "Homicidio premeditado.",
                "Asesinato con circunstancias agravantes."
            ],
            correct: 0
        },
        {
            question: "¿Qué es la responsabilidad penal de las personas jurídicas?",
            answers: [
                "La posibilidad de sancionar a empresas por delitos cometidos en su nombre.",
                "La imputación de delitos a las entidades corporativas.",
                "La atribución de conductas delictivas a organizaciones.",
                "La capacidad de las personas jurídicas para ser penalmente responsables.",
                "La inclusión de empresas en el ámbito de la responsabilidad penal."
            ],
            correct: 0
        },
        {
            question: "¿Qué es el principio de legalidad en derecho penal?",
            answers: [
                "El principio que establece que no hay delito ni pena sin ley previa.",
                "La garantía de que solo se puede sancionar lo previsto en la ley.",
                "El fundamento de la seguridad jurídica en materia penal.",
                "La base del sistema penal moderno.",
                "El principio que exige claridad y precisión en las normas penales."
            ],
            correct: 0
        }
    ]
];

let currentQuestionIndex = 0;
let currentDifficulty = 1;
let startTime;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    startTime = new Date();
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionData = questions[currentDifficulty - 1][currentQuestionIndex];
    const shuffledAnswers = [...questionData.answers];
    shuffle(shuffledAnswers);
    questionContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        ${shuffledAnswers.map(answer => `
            <div class="answer" onclick="selectAnswer('${answer}', ${questionData.correct})">${answer}</div>
        `).join('')}
    `;
    document.getElementById('feedback').innerText = '';
    updateControls();
}

function updateControls() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === questions[currentDifficulty - 1].length - 1;
    document.getElementById('back-btn').style.display = 'block';
}

function selectAnswer(selectedAnswer, correctIndex) {
    const questionData = questions[currentDifficulty - 1][currentQuestionIndex];
    const answers = document.querySelectorAll('.answer');
    const correctAnswer = questionData.answers[correctIndex];
    answers.forEach(answer => {
        if (answer.innerText === correctAnswer) {
            answer.classList.add('correct');
        } else if (answer.innerText === selectedAnswer) {
            answer.classList.add('incorrect');
        }
        answer.onclick = null;  // Deshabilitar clics adicionales
    });
    if (selectedAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = '¡Correcto!';
    } else {
        document.getElementById('feedback').innerText = 'Incorrecto. La respuesta correcta está marcada en verde.';
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < questions[currentDifficulty - 1].length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResult();
    }
});

function goBack() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'block';
    document.getElementById('feedback').innerText = '';
}

function showResult() {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    document.getElementById('quiz-container').innerHTML = `
        <h2>¡Has completado el quiz!</h2>
        <p>Tiempo tomado: ${timeTaken} segundos.</p>
        <button onclick="goBack()">Regresar al Menú</button>
    `;
}

displayQuestion();
