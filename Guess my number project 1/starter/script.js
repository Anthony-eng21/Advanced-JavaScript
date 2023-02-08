'use strict';
// console.log(document.querySelector('.message'). //</P>
// textContent);
// document.querySelector('.message').textContent //</P>
//  = 'Correct Number!';

//  document.querySelector('.number').textContent = 13; //<input/>
//  document.querySelector('.score').textContent = 10; //span

//  document.querySelector('.guess').value = 23;
//  console.log(document.querySelector('.guess').value); //<input/>
//some DOM manipulation

let secretNumber = Math.trunc(Math.random() * 20) + 1; //gets a value of an int 1 - 20
let score = 20;//always good to hold a variable(state variable)that hold specific data in our code
//you can only guess correctly between 1 and 20 over give you too high text context
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = 
    message;
}

// document.querySelector('.number').textContent = 
// secretNumber; //this sets our random number to our number variable and .number class

document.querySelector('.check').addEventListener
 ('click', function() {
    const guess = Number(document.querySelector('.guess').value); //gets value of .guess input and sets it to our variable guess
    // console.log(guess, typeof guess); test
    //no input
    if(!guess) {
        // document.querySelector('.message').textContent = //if the value is zero/falsey .message prints ->
        // 'No Number >:O';
        displayMessage('No Number >:O');
    //guess is right
    } else if (guess === secretNumber) { //checks when the guess is the secret number
        // document.querySelector('.message').textContent //</P>
        // = ' ( ͡° ͜ʖ ͡°) Correct Number!'; //prints when you get it right
        displayMessage(' ( ͡° ͜ʖ ͡°) Correct Number!'); //prints when you get it right
        
        document.querySelector('.number').textContent = 
        secretNumber; //this sets our random number to our secretNumber variable and .number class

        document.querySelector('body').style
        .backgroundColor = '#60b347';//almost lime green

        document.querySelector('.number').style.width = 
        '30rem'; //inline styles

        if(score > highscore) { //checking if current score is greater than the highscore starts with 0 at start
            highscore = score; //set highscore to current score variable if the score is above our previous highscore
            document.querySelector('.highscore').
            textContent = highscore;
        }
    
        //when guess is wrong using D
    } else if(guess !== secretNumber) {
        //guess is too high
        if(score > 1){ //needs to be one because zero is a number and counts as a guess
            // document.querySelector('.message').textContent =
        // guess > secretNumber ? ' ʕ ·(エ)· ? Too high!' : //using ternary operator(?) to determine what message prints and returns a value
        //  ' ( ༎ຶ ۝ ༎ຶ ) Too low!' ;//if you're above secretNumber 
         displayMessage( guess > secretNumber ? 
        '(ノಠ益ಠ)ノ彡┻━┻ Too High!' : //using ternary operator(?) to check what was too high and too low 
        '( ༎ຶ ۝ ༎ຶ )Too Low!');
         score--; //decrements the score value in the <span/> if you guess wrong 
         document.querySelector('.score').textContent = 
         score; 
        } else { //past 1 on the score on too high state
            // document.querySelector('.message').textContent = 
            // ' (凸ಠ益ಠ)凸 You lost the game!'; 
            displayMessage('(凸ಠ益ಠ)凸 You lost the game!');
            document.querySelector('.score').textContent = 
         0;
        }//if > secretNumber gets to 0 on the score then you lose the game
    } 
        
        //guess is too high
    // } else if (guess > secretNumber){

    //     if(score > 1){ //needs to be one because zero is a number and counts as a guess
    //         document.querySelector('.message').textContent =
    //     ' ʕ ·(エ)· ? Too high!';//if you're above secretNumber
    //      score--; //decrements the score value in the <span/> if you guess wrong 
    //      document.querySelector('.score').textContent = 
    //      score; 
    //     } else { //past 1 on the score on too high state
    //         document.querySelector('.message').textContent = 
    //         ' (凸ಠ益ಠ)凸 You lost the game!'; 
    //         document.querySelector('.score').textContent = 
    //      0;
    //     }//if > secretNumber gets to 0 on the score then you lose the game
       
    //     //guess is too low
    // } else if (guess < secretNumber){
    //     if(score > 1){ //needs to be one because zero is a number and counts as a guess
    //         document.querySelector('.message').textContent =
    //         ' ( ༎ຶ ۝ ༎ຶ ) Too low!';//if you're above secretNumber
    //      score--; //decrements the score value in the <span/> if you guess wrong 
    //      document.querySelector('.score').textContent = 
    //      score; 
    //     } else { //past 1 on the score on too low state
    //         document.querySelector('.message').textContent = 
    //         ' (凸ಠ益ಠ)凸 You lost the game!'; 
    //         document.querySelector('.score').textContent = 
    //      0;
    //     }

    // }
 });

//coding challenge #1 { 
//again button / restart logic through dom manipulation so we can get a highscore(!important)
document.querySelector('.again').addEventListener
('click', function(){
    score = 20; //
    secretNumber = Math.trunc(Math.random() * 20) + 1; //starts the random numbers again

    // document.querySelector('.message').textContent =
    // 'Start Guessing...'; //sets it back to the default string value referencing the html declared

    displayMessage('Start Guessing...');

    document.querySelector('.score').textContent = 
    score;  //sets the random number score to up to 20 

    document.querySelector('.number').textContent = '?'; //puts the input value back to its default string value
    
    document.querySelector('.guess').value = ''; //puts the input value back to its default empty string(0) value on when event listener is handled again

    document.querySelector('body').style
    .backgroundColor = '#222';//black
    document.querySelector('.number').style.width = 
    '15rem'; //inline styles. sets back to half size font when we press again
});

 //coding challenge #1 }