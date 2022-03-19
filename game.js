const addToBody = document.querySelector('body');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userChoseMessage = document.getElementById('user');
const cpuChoseMessage = document.getElementById('cpu');
const result = document.getElementById('result');
const mes1 = document.getElementById('mes1');
const mes2 = document.getElementById('mes2');
const mes3 = document.getElementById('mes3');
let random = [rock.id, paper.id, scissors.id];
let userChose;
let cpuChose;
let userWin = 0;
let cpuWin = 0;
let draw = 0;

rock.addEventListener('click', () => {
    userChose = rock.id;
    cpuChose = random[Math.floor(Math.random()*3)];
    if(userChose == 'rock' && cpuChose == 'rock'){
        result.textContent = 'Result: DRAW!'
        draw++;
    } else if (userChose == 'rock' && cpuChose == 'paper'){
        result.textContent = 'Result: CPU WIN!';
        cpuWin++;
    } else if (userChose == 'rock' && cpuChose == 'scissors') {
        result.textContent = 'Result: USER WIN!';
        userWin++;
    }
    addPoints();
    whatYouChose();
});

paper.addEventListener('click', () => {
    userChose = paper.id;
    cpuChose = random[Math.floor(Math.random()*3)];
    if(userChose == 'paper' && cpuChose == 'paper'){
        result.textContent = 'Result: DRAW!'
        draw++;
    } else if (userChose == 'paper' && cpuChose == 'scissors'){
        result.textContent = 'Result: CPU WIN!';
        cpuWin++;
    } else if (userChose == 'paper' && cpuChose == 'rock') {
        result.textContent = 'Result: USER WIN!';
        userWin++;
    }
    addPoints();
    whatYouChose();
});

scissors.addEventListener('click', () => {
    userChose = scissors.id;
    cpuChose = random[Math.floor(Math.random()*3)];
    if(userChose == 'scissors' && cpuChose == 'scissors'){
        result.textContent = 'Result: DRAW!'
        draw++;
    } else if (userChose == 'scissors' && cpuChose == 'rock'){
        result.textContent = 'Result: CPU WIN!';
        cpuWin++;
    } else if (userChose == 'scissors' && cpuChose == 'paper') {
        result.textContent = 'Result: USER WIN!';
        userWin++;
    }
    addPoints();
    whatYouChose();
});

function addPoints() {
    mes1.textContent = `Wins: ${userWin}`;
    mes2.textContent = `Lost: ${cpuWin}`;
    mes3.textContent = `Draws: ${draw}`;
}

function whatYouChose() {
    user.textContent = `YOU chose: ${userChose}`;
    cpu.textContent = `CPU chose: ${cpuChose}`;
}