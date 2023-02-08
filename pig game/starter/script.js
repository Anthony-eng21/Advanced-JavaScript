    'use strict';
    // selecting elements 
    const player0EL = document.querySelector('.player--0'); 
    const player1EL = document.querySelector('.player--1');
    const score0EL = document.querySelector('#score--0');
    const score1EL = document.getElementById('score--1');
    const current0EL = document.getElementById('current--0');
    const current1EL = document.getElementById('current--1');

    const diceEL = document.querySelector('.dice');
    const btnNew = document.querySelector('.btn--new');
    const btnRoll = document.querySelector('.btn--roll');
    const btnHold = document.querySelector('.btn--hold');

  let scores, currentScore, activePlayer, playing; //declaration of variables 
    //starting conditons
    //function that initializes the game 
    const init = function() {
        scores = [0, 0]; //0, 0 for both total scores array values in the primary state of our app
        currentScore = 0; //state variable 
        activePlayer = 0; 
        playing = true; //staate
        
        score0EL.textContent = 0;
        score1EL.textContent = 0;
        current0EL.textContent = 0;
        current1EL.textContent = 0;

        diceEL.classList.add('hidden');//adding hidden class onto diceEL/img
        player0EL.classList.remove('player--winner');
        player1EL.classList.remove('player--winner');
        player0EL.classList.add('player--active');
        player1EL.classList.remove('player--active');
    };
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; //sets text context to 0 for each player if you roll a 1 
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //checks whether its player 0(1) or 1(2) in the array object 
    // the ternary operator
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active'); 
}
//rolling dice functionality

btnRoll.addEventListener('click', function(){
    if(playing) {

    
//generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //gets a number between 1 and 6 for the dice 

    //display the dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`; //gets the image of the dice with the value from $dice with template literal
    // console.log(dice); // 1-6 so we know we're getting the $dice 
    //check for rolled 1 if true change players
    if(dice !== 1){
        //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).
    textContent = currentScore; //dynamically get the active player's score.
} else {
    switchPlayer(); //when we hold the score switch player 
    //switch players
// document.getElementById(`current--${activePlayer}`).
// textContent = 0; //sets text context to 0 for each player if you roll a 1 
// activePlayer = activePlayer === 0 ? 1 : 0; //checks whether its player 0(1) or 1(2) with
// // the ternary operator
// currentScore = 0;
// player0EL.classList.toggle('player--active');
// player1EL.classList.toggle('player--active'); //toggling both makes it so it will
// //be sure to only toggle one of the elements at a time. its a light gray color 
        }
    }
});

btnHold.addEventListener('click', function(){
    if(playing) {
    // 1 add current score to active player's score 
    scores[activePlayer] += currentScore;
    
// scores[1] = scores[1] + currentScore same as above
    document.getElementById(`score--${activePlayer}`).textContent = 
    scores[activePlayer];
    //2 Check if players score >== 100
    if(scores[activePlayer] >= 40) { //
        
        playing = false; // when ur not playing set it to false so it wont execute this code 
        diceEL.classList.add('hidden'); //gets rid of dice when we finish/win
        
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); //winning message
        
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); //cant have active and player classes added at the same time   
        
    } else {
        //switch to next player
        switchPlayer(); //when we hold the score switch player 
        }
    }
});
//setting back initial conditions of the game
btnNew.addEventListener('click', init);

