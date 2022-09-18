/* Imports */

import { getRandomItem } from './utils.js';

/* State */
let gameState = 'choose'; //'choose', 'result'
let trainerChoice = ''; //charizard, blastoise, venusaur
let compChoice = ''; //charizard, blastoise, venusaur

let battles = 0;
let wins = 0;
let losses = 0;
let draws = 0;

// probability array
const pokeChoices = ['charizard', 'blastoise', 'venusaur'];

/* Actions */
function loadPage() {
    displayChoices();
    displayResults();
}

function choosePokemon(userChoice) {
    gameState = 'results';
    battles++;
    trainerChoice = userChoice;
    compChoice = getRandomItem(pokeChoices);
    moveComp(compChoice);
    selectWinner(trainerChoice, compChoice);
    totalDisplay.textContent = battles;
}

function moveComp(compChoice) {
    if (compChoice === 'charizard') {
        compChar.classList.add('comp-choose-char');
        compBlast.classList.add('hidden');
        compVen.classList.add('hidden');
    } else if (compChoice === 'blastoise') {
        compBlast.classList.add('comp-choose-blast');
        compChar.classList.add('hidden');
        compVen.classList.add('hidden');
    } else if (compChoice === 'venusaur') {
        compVen.classList.add('comp-choose-ven');
        compChar.classList.add('hidden');
        compBlast.classList.add('hidden');
    }
}

const selectWinner = (trainerChoice, compChoice) => {
    let result = '';

    if (trainerChoice === compChoice) {
        result = 'draw';
        draws++;
        drawsDisplay.textContent = draws;
        battleResult.textContent = 'Draw!';
    } else if (trainerChoice === 'charizard' && compChoice === 'venusaur') {
        result = 'win';
        wins++;
        winsDisplay.textContent = wins;
        battleResult.textContent = 'You Win!';
    } else if (trainerChoice === 'venusaur' && compChoice === 'blastoise') {
        result = 'win';
        wins++;
        winsDisplay.textContent = wins;
        battleResult.textContent = 'You Win!';
    } else if (trainerChoice === 'blastoise' && compChoice === 'charizard') {
        result = 'win';
        wins++;
        winsDisplay.textContent = wins;
        battleResult.textContent = 'You Win!';
    } else if (trainerChoice === 'venusaur' && compChoice === 'charizard') {
        result = 'lose';
        losses++;
        lossesDisplay.textContent = losses;
        battleResult.textContent = 'You Lose!';
    } else if (trainerChoice === 'blastoise' && compChoice === 'venusaur') {
        result = 'lose';
        losses++;
        lossesDisplay.textContent = losses;
        battleResult.textContent = 'You Lose!';
    } else if (trainerChoice === 'charizard' && compChoice === 'blastoise') {
        result = 'lose';
        losses++;
        lossesDisplay.textContent = losses;
        battleResult.textContent = 'You Lose!';
    }

    return result;
};

/* Components */

// Scoreboard
const winsDisplay = document.getElementById('wins-display');
const totalDisplay = document.getElementById('total-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');

/* Component */
// get DOM
const userChoicesDiv = document.getElementById('pokemon-choices');
const compStarters = document.getElementById('comp-starters');
const char = document.getElementById('charizard');
const blast = document.getElementById('blastoise');
const ven = document.getElementById('venusaur');
const compChar = document.getElementById('comp-char');
const compBlast = document.getElementById('comp-blast');
const compVen = document.getElementById('comp-ven');
const pokemonSection = document.getElementById('pokemon');

// display
function displayChoices() {
    if (gameState === 'choose') {
        winsDisplay.textContent = wins;
        totalDisplay.textContent = battles;
        lossesDisplay.textContent = losses;
        drawsDisplay.textContent = draws;
        pokemonSection.classList.remove('display-none');
        userChoicesDiv.classList.remove('hidden');
        compStarters.classList.remove('hidden');
        resultSection.classList.remove('reveal', 'move-results');
        resultSection.classList.add('hidden');
        char.classList.remove('choose-char');
        blast.classList.remove('choose-blast');
        ven.classList.remove('choose-ven');
        compChar.classList.remove('comp-choose-char');
        compBlast.classList.remove('comp-choose-blast');
        compVen.classList.remove('comp-choose-ven');
        char.classList.remove('hidden');
        blast.classList.remove('hidden');
        ven.classList.remove('hidden');
        compChar.classList.remove('hidden');
        compBlast.classList.remove('hidden');
        compVen.classList.remove('hidden');
    }
}

// event listeners
char.addEventListener('click', () => {
    char.classList.add('choose-char');
    blast.classList.add('hidden');
    ven.classList.add('hidden');
    trainerChoice = 'charizard';
    compChoice = getRandomItem(pokeChoices);
    choosePokemon('charizard');
    gameState = 'results';
    displayResults();
});

blast.addEventListener('click', () => {
    blast.classList.add('choose-blast');
    char.classList.add('hidden');
    ven.classList.add('hidden');
    choosePokemon('blastoise');
    gameState = 'results';
    displayResults();
});

ven.addEventListener('click', () => {
    ven.classList.add('choose-ven');
    blast.classList.add('hidden');
    char.classList.add('hidden');
    choosePokemon('venusaur');
    gameState = 'results';
    displayResults();
});

// Results
const resultSection = document.getElementById('results');
const userPokemon = document.getElementById('user-pokemon');
const compPokemon = document.getElementById('computer-pokemon');
const battleResult = document.getElementById('battle-result');
const playAgainButton = document.getElementById('play-again');

playAgainButton.addEventListener('click', () => {
    gameState = 'choose';
    displayChoices();
});

function displayResults() {
    if (gameState === 'results') {
        setTimeout(() => {
            userChoicesDiv.classList.add('hidden');
            compStarters.classList.add('hidden');
        }, '300');
        pokemonSection.classList.add('display-none');
        userPokemon.src = './assets/' + trainerChoice + '.png';
        compPokemon.src = './assets/' + compChoice + '.png';
        resultSection.classList.add('move-results');
        setTimeout(() => {
            resultSection.classList.add('reveal');
        }, '500');
        setTimeout(() => {
            resultSection.classList.remove('hidden');
        }, '600');
    }
}

/* Run page load code */
loadPage();
