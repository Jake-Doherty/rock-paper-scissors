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
    selectWinner(trainerChoice, compChoice);
    totalDisplay.textContent = battles;
}

const selectWinner = (trainerChoice, compChoice) => {
    let result = '';

    if (trainerChoice === compChoice) {
        result = 'draw';
        draws++;
        drawsDisplay.textContent = draws;
    } else if (trainerChoice === 'charizard' && compChoice === 'venusaur') {
        result = 'win';
        wins++;
        winsDisplay.textContent = wins;
    } else if (trainerChoice === 'venusaur' && compChoice === 'blastoise') {
        result = 'win';
        wins++;
        winsDisplay.textContent = wins;
    } else if (trainerChoice === 'blastoise' && compChoice === 'charizard') {
        result = 'win';
        wins++;
        winsDisplay.textContent = wins;
    } else if (trainerChoice === 'venusaur' && compChoice === 'charizard') {
        result = 'lose';
        losses++;
        lossesDisplay.textContent = losses;
    } else if (trainerChoice === 'blastoise' && compChoice === 'venusaur') {
        result = 'lose';
        losses++;
        lossesDisplay.textContent = losses;
    } else if (trainerChoice === 'charizard' && compChoice === 'blastoise') {
        result = 'lose';
        losses++;
        lossesDisplay.textContent = losses;
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
const char = document.getElementById('charizard');
const blast = document.getElementById('blastoise');
const ven = document.getElementById('venusaur');
const compChar = document.getElementById('comp-char');
const compBlast = document.getElementById('comp-blast');
const compVen = document.getElementById('comp-ven');

// display
function displayChoices() {
    if (gameState === 'choose') {
        resultSection.classList.add('hidden');
        char.classList.remove('choose');
        blast.classList.remove('choose');
        ven.classList.remove('choose');
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
    char.classList.add('choose');
    setTimeout(() => {
        blast.classList.add('hidden');
        ven.classList.add('hidden');
    }, '500');
    trainerChoice = 'charizard';
    compChoice = getRandomItem(pokeChoices);
    choosePokemon('charizard');
    gameState = 'results';
    displayResults();
});

blast.addEventListener('click', () => {
    blast.classList.add('choose');
    char.classList.add('hidden');
    ven.classList.add('hidden');
    choosePokemon('blastoise');
    gameState = 'results';
    displayResults();
});
ven.addEventListener('click', () => {
    ven.classList.add('choose');
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
        resultSection.classList.remove('hidden');
        // selectWinner();
    }
}

/* Run page load code */
loadPage();
