let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissor');

let counter = 0;
let compcounter = 0;

const player = document.getElementById('player')
const computer = document.getElementById('computer')
const newIMG = document.createElement('img')
const secIMG = document.createElement('img')
const h1 = document.getElementById('h1');
const h2 = document.getElementById('count');
const h3 = document.getElementById('compcount');


function compChoice() {
    const p2 = ['rock', 'paper', 'scissors'];
    const randomElement = Math.floor(Math.random() * 3);

    return p2[randomElement]
}

const choice = compChoice()

function removePIC() {
    player.removeChild(newIMG)
    computer.removeChild(secIMG)
}

rock.addEventListener('click', function () {

    newIMG.src = "rocks.jpg";
    player.appendChild(newIMG);


    let p1 = 'rock'

    const choice = compChoice()

    secIMG.src = `${choice}.jpg`
    computer.appendChild(secIMG)

    setTimeout(() => {
        removePIC();
        h1.innerHTML = 'ROCK PAPER SCISSORS'
        h2.innerHTML = `Player SCORE ${counter}/5`
        h3.innerHTML = `Computer SCORE ${compcounter}/5`
    }, 3000);

    if (p1 === 'paper' && choice === 'rock' || p1 === 'scissors' && choice === 'paper' || p1 === 'rock' && choice === 'scissors') {
        h1.innerHTML = `you win p2 had ${choice}`
        counter++;
        if (counter === 5) {
            console.log('PLAYER WON')
            counter = 0;
            compcounter = 0;
            h1.innerHTML = 'PLAYER WON GREAT JOB'
        }
    } else if (p1 === 'paper' && choice === 'scissors' || p1 === 'scissors' && choice === 'rock' || p1 === 'rock' && choice === 'paper') {
        h1.innerHTML = `you lose p2 had ${choice}`
        compcounter++;
        if (compcounter === 5) {
            console.log('CONSOLE WON')
            counter = 0;
            compcounter = 0;
            h1.innerHTML = 'CONSOLE WON GREAT JOB'
        }
    } else {
        h1.innerText = 'IT WAS A TIE'
    }
})

paper.addEventListener('click', function () {

    newIMG.src = "papers.png";
    player.appendChild(newIMG)

    let p1 = 'paper'

    const choice = compChoice()

    secIMG.src = `${choice}.jpg`
    computer.appendChild(secIMG)

    setTimeout(() => {
        removePIC();
        h1.innerHTML = 'ROCK PAPER SCISSORS'
        h2.innerHTML = `Player SCORE ${counter}/5`
        h3.innerHTML = `Computer SCORE ${compcounter}/5`
    }, 3000);

    if (p1 === 'paper' && choice === 'rock' || p1 === 'scissors' && choice === 'paper' || p1 === 'rock' && choice === 'scissors') {
        h1.innerHTML = `you win p2 had ${choice}`
        counter++;
        if (counter === 5) {
            console.log('PLAYER WON')
            counter = 0;
            compcounter = 0;
            h1.innerHTML = 'PLAYER WON GREAT JOB'
        }
    } else if (p1 === 'paper' && choice === 'scissors' || p1 === 'scissors' && choice === 'rock' || p1 === 'rock' && choice === 'paper') {
        h1.innerHTML = `you lose p2 had ${choice}`
        compcounter++;
        if (compcounter === 5) {
            console.log('CONSOLE WON')
            counter = 0;
            compcounter = 0;
            h1.innerHTML = 'CONSOLE WON GREAT JOB'
        }
    } else {
        h1.innerText = 'IT WAS A TIE'
    }
})

scissors.addEventListener('click', function () {

    newIMG.src = "scissorss.jpg";
    player.appendChild(newIMG)

    let p1 = 'scissors'

    const choice = compChoice()

    secIMG.src = `${choice}.jpg`
    computer.appendChild(secIMG)

    setTimeout(() => {
        removePIC();
        h1.innerHTML = 'ROCK PAPER SCISSORS'
        h2.innerHTML = `Player SCORE ${counter}/5`
        h3.innerHTML = `Computer SCORE ${compcounter}/5`
    }, 3000);

    if (p1 === 'paper' && choice === 'rock' || p1 === 'scissors' && choice === 'paper' || p1 === 'rock' && choice === 'scissors') {
        h1.innerHTML = `you win p2 had ${choice}`
        counter++;
        if (counter === 5) {
            console.log('PLAYER WON')
            counter = 0;
            compcounter = 0;
            h1.innerHTML = 'PLAYER WON GREAT JOB'
        }
    } else if (p1 === 'paper' && choice === 'scissors' || p1 === 'scissors' && choice === 'rock' || p1 === 'rock' && choice === 'paper') {
        h1.innerHTML = `you lose p2 had ${choice}`
        compcounter++;
        if (compcounter === 5) {
            console.log('CONSOLE WON')
            counter = 0;
            compcounter = 0;
            h1.innerHTML = 'CONSOLE WON GREAT JOB'
        }
    } else {
        h1.innerText = 'IT WAS A TIE'
    }
})