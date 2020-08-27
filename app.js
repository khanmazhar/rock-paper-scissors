let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

main();

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function wordConvert(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    const score_div = document.getElementById(userChoice);

    result_div.innerHTML = `${wordConvert(userChoice)}${smallUserWord} beats ${wordConvert(computerChoice)}${smallCompWord}. You WIN!`;
    score_div.classList.add('green-glow');
    setTimeout(() => score_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    result_div.innerHTML = `${wordConvert(userChoice)}${smallUserWord} loses to ${wordConvert(computerChoice)}${smallCompWord}. You Lost...`;

    const score_div = document.getElementById(userChoice);
    score_div.classList.add('red-glow');
    setTimeout(() => score_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${wordConvert(userChoice)}${smallUserWord} equals ${wordConvert(computerChoice)}${smallCompWord}. It's a draw.`;

    const score_div = document.getElementById(userChoice);
    score_div.classList.add('grey-glow');
    setTimeout(() => score_div.classList.remove('grey-glow'), 300);
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;

        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}



