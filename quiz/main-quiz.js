const quizzes = [
    {
        background: "/assets/quiz/mjolnir-and-leviathan-axe.jpg",
        question: "Which weapon does Kratos intially wield?",
        answers: [
            {text: "Blades of Chaos", correct: true},
            {text: "Leviathan Axe", correct: false},
            {text: "Mjölnir", correct: false},
            {text: "Gungnir", correct: false}
        ]
    },
    {
        background: "/assets/quiz/tyr-temple.jpg",
        question: "Who is the de-facto ruler of Midgard?",
        answers: [
            {text: "Freya", correct: false},
            {text: "Ymir", correct: false},
            {text: "Odin", correct: true},
            {text: "Thor", correct: false}
        ]
    },
    {
        background: "/assets/quiz/dwarven-stone.jpg",
        question: "Which race created Mjölnir and Gungnir?",
        answers: [
            {text: "The Aesir", correct: false},
            {text: "The Vanir", correct: false},
            {text: "The Dwarves", correct: true},
            {text: "The Elves", correct: false}
        ]
    },
    {
        background: "/assets/quiz/valhalla-chamber.jpg",
        question: "Which hall hosts the warriors who died in valor?",
        answers: [
            {text: "Náströnd", correct: false},
            {text: "Fólkvangr", correct: false},
            {text: "Utgard", correct: false},
            {text: "Valhalla", correct: true}
        ]
    },
    {
        background: "/assets/quiz/the-valkyries.jpg",
        question: "Upon one's demise, who will deliver them to Valhalla if elligible?",
        answers: [
            {text: "The Viking", correct: false},
            {text: "The Einherjar", correct: false},
            {text: "The Nornir", correct: false},
            {text: "The Valkyries", correct: true}
        ]
    },
    {
        background: "/assets/quiz/odin.jpg",
        question: "Why is Odin missing his right eye?",
        answers: [
            {text: "Gouged by a Jötunn during one of his battles", correct: false},
            {text: "Sacrificed for knowledge as a means to evade his prophesied death", correct: true},
            {text: "Sacrificed for a truce in the Aesir-Vanir War", correct: false},
            {text: "Gifted to Hoðr as a sign of respect", correct: false}
        ]
    },
    {
        background: "/assets/quiz/veithurgard.jpg",
        question: "Why are Veithurgard and Konùnsgard uninhabited?",
        answers: [
            {text: "The residents were sacrificed by the king for a legendary armor set", correct: true},
            {text: "The Aesir enslaved everyone they saw fit", correct: false},
            {text: "Hel-Walkers and Draugr raided the settlements", correct: false},
            {text: "They moved to greener pastures for better survival", correct: false}
        ]
    },
    {
        background: "/assets/quiz/the-summit.jpg",
        question: "Why is Mimir imprisoned by Odin for 109 winters?",
        answers: [
            {text: "Inviting an unwanted visitor to Asgard without Odin's consent", correct: false},
            {text: "Hindering Thor from slaughtering the Jötnar", correct: false},
            {text: "Providing assistance to the Jötnar behind Odin's back", correct: true},
            {text: "Helping the dwarves rebel against the Aesir", correct: false}
        ]
    },
    {
        background: "/assets/quiz/svartalfheim.jpg",
        question: "Why does Odin prevent access to Svartalfheim?",
        answers: [
            {text: "The dwarves are under heavy oppression by the Aesir", correct: false},
            {text: "Odin was asked to seal travel paths due to the dwarves' fear of outsiders", correct: false},
            {text: "Odin sealed the realm to prevent the dwarves from allying with the Vanir", correct: true},
            {text: "Svartalfheim was ravaged by the elves", correct: false}
        ]
    },
    {
        background: "/assets/quiz/jotunheim.jpg",
        question: "Why do the Aesir fear of the Jötnar?",
        answers: [
            {text: "The Jötnar possess rich abilities such as brute strength, ancient magic, and foretelling", correct: true},
            {text: "The Jötnar know an ancient path to slip into Asgard", correct: false},
            {text: "A plethora of Aesir are likely to die when battling the Jötnar", correct: false},
            {text: "Jötunheim is home to ancient runes capable of destroying Asgard", correct: false}
        ]
    }
]

const body = document.querySelector('body');
const quiz = document.querySelector('.quiz');
const quizQuestion = document.getElementById('question');
const quizHeader = document.getElementById('quiz-header');
const answerButtons = document.getElementById('quiz-answers');
const nextButton = document.getElementById('next-button');

let quizIndex = 0;
let score = 0;

function startQuiz() {
    getAllQuestions();
}

function getAllQuestions() {
    resetState();

    let currentQuiz = quizzes[quizIndex];
    let quizNumber = quizIndex + 1;

    quizQuestion.innerHTML = currentQuiz.question;
    quizHeader.innerHTML = 'Quiz #' + quizNumber;

    body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(" + currentQuiz.background + ")";

    currentQuiz.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        answerButtons.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    nextButton.disabled = true;
    nextButton.style.opacity = '0';

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    if(isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }

        button.disabled = true;
    });

    nextButton.disabled = false;
    nextButton.style.opacity = '1';
}

function getScore() {
    resetState();
    quizHeader.innerHTML = 'End of Quiz'
    quizQuestion.innerHTML = `You got ${score} correct answers out of ${quizzes.length} questions! `;

    body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/quiz/vanaheim-exotic-view.jpg)";
    
    nextButton.innerHTML = 'Go Back';
    nextButton.disabled = false;
    nextButton.style.opacity = '1';
}

function handleNextButton() {
    quizIndex++;

    if(quizIndex < quizzes.length) {
        getAllQuestions();
    } else {
        getScore();
    }
}

nextButton.addEventListener('click', () => {
    if (quizIndex < quizzes.length) {
        handleNextButton();
    } else {
        window.location.href = '/quiz/quiz.html';
    }
});

startQuiz()