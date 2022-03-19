const addToBody = document.querySelector('body');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userChoseMessage = document.getElementById('user');
const cpuChoseMessage = document.getElementById('cpu');
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
    console.log(userChose, cpuChose);
    if(userChose == 'rock' && cpuChose == 'rock'){
        console.log('DRAW!');
        draw++;
    } else if (userChose == 'rock' && cpuChose == 'paper'){
        console.log('CPU WIN!');
        cpuWin++;
    } else if (userChose == 'rock' && cpuChose == 'scissors') {
        console.log('USER WIN!');
        userWin++;
    }
    addPoints();
});

paper.addEventListener('click', () => {
    userChose = paper.id;
    cpuChose = random[Math.floor(Math.random()*3)];
    console.log(userChose, cpuChose);
    if(userChose == 'paper' && cpuChose == 'paper'){
        console.log('DRAW!');
        draw++;
    } else if (userChose == 'paper' && cpuChose == 'scissors'){
        console.log('CPU WIN!');
        cpuWin++;
    } else if (userChose == 'paper' && cpuChose == 'rock') {
        console.log('USER WIN!');
        userWin++;
    }
    addPoints();
});

scissors.addEventListener('click', () => {
    userChose = scissors.id;
    cpuChose = random[Math.floor(Math.random()*3)];
    console.log(userChose, cpuChose);
    if(userChose == 'scissors' && cpuChose == 'scissors'){
        console.log('DRAW!');
        draw++;
    } else if (userChose == 'scissors' && cpuChose == 'rock'){
        console.log('CPU WIN!');
        cpuWin++;
    } else if (userChose == 'scissors' && cpuChose == 'paper') {
        console.log('USER WIN!');
        userWin++;
    }
    addPoints();
});

function addPoints() {
    mes1.textContent = `Wygrałeś już: ${userWin} razy`;
    mes2.textContent = `Przegrałeś już: ${cpuWin} razy`;
    mes3.textContent = `Zremisowałeś już: ${draw} razy`;
}