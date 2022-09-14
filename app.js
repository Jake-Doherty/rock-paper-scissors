/* Imports */

/* State */
let gameState = 'choose'; //'choose', 'result'
let userchoice = ''; //charizard, blastoise, venusaur
let compChoice = ''; //charizard, blastoise, venusaur
let result = '';

let battles = 0;
let wins = 0;

/* Actions */
function loadPage() {
    displayChoices();
}

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

// display
function displayChoices() {
    char.classList.remove('hidden');
    blast.classList.remove('hidden');
    ven.classList.remove('hidden');

    if (gameState === 'results') {
        resultSection.classList.remove('hidden');
    }
}

// event listeners

// Results
const resultSection = document.getElementById('results');
const userPokemon = document.getElementById('user-pokemon');
const compPokemon = document.getElementById('computer-pokemon');
const battleResult = document.getElementById('battle-result');

/* Run page load code */
loadPage();
