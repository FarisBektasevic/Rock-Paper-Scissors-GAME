const picks = document.querySelectorAll('.pick-btn')
const pickPage = document.querySelector('.pick-page')
const rulesBcg = document.querySelector('.rules-bcg')
const rulesBtn = document.querySelector('.rules-btn')
const rules = document.querySelector('.rules')
const closeRules = document.getElementById('close-rules')
const contest = document.querySelector('.contest')
const choice = document.querySelectorAll('.choice')
const result = document.getElementById('result')
const playAgainBtn = document.querySelector('.play-again-btn')
const scoreCount = document.querySelector('.score-count')

const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'
let PLAYERS_CHOICE
let COMPUTERS_CHOICE
let score = 0

picks.forEach( (pick, idx) => {
    pick.addEventListener('click', () => {
        pickPage.style.display = 'none'
        contest.style.display = 'flex'

        if (PLAYERS_CHOICE === PAPER){
            choice[0].style.display = 'flex'
        } else if (PLAYERS_CHOICE === ROCK) {
            choice[1].style.display = 'flex'
        } else if (PLAYERS_CHOICE === SCISSORS){
            choice[2].style.display = 'flex'
        }

        getComputersChoice()

        if (COMPUTERS_CHOICE === PAPER) {
            choice[3].style.display = 'flex'
        } else if (COMPUTERS_CHOICE === ROCK){
            choice[4].style.display = 'flex'
        } else if (COMPUTERS_CHOICE === SCISSORS){
            choice[5].style.display = 'flex'
        }

        getWinner(PLAYERS_CHOICE, COMPUTERS_CHOICE)
    })
})

const getWinner = (pChoice, cChoice) =>{
    if (pChoice === cChoice) {
        result.textContent = 'A DRAW'
    } else if (pChoice === ROCK && cChoice === SCISSORS 
        || pChoice === SCISSORS && cChoice === PAPER 
        || pChoice === PAPER && cChoice === ROCK) {
            result.textContent = 'YOU WIN'
            score++
        } else {
            result.textContent = 'YOU LOSE'
            score--
        }
}


const getPlayersChoice = pick => {
    PLAYERS_CHOICE = pick
}

const getComputersChoice = () => {
    const randomValue = Math.random()
    if (randomValue < 0.34) {
        COMPUTERS_CHOICE = ROCK
    } else if (randomValue < 0.67) {
        COMPUTERS_CHOICE = PAPER
    } else {
        COMPUTERS_CHOICE = SCISSORS
    }
    return COMPUTERS_CHOICE
}

playAgainBtn.addEventListener('click', () => {
    contest.style.display = 'none'
    pickPage.style.display = 'flex'
    PLAYERS_CHOICE = ''
    COMPUTERS_CHOICE = ''
    choice.forEach(ch => {
        ch.style.display = 'none'
    });

    if (score < 0) {
        score = 0
    }
    scoreCount.textContent = score
})

rulesBtn.addEventListener('click', () => {
    rulesBcg.classList.toggle('active')
    rules.classList.add('visible')
})

closeRules.addEventListener('click', () => {
    rulesBcg.classList.remove('active')
    rules.classList.remove('visible')
    
})

