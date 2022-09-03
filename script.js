'use strict';

// Function to Generate random number.
function generateRandomNumber() {
    return Math.floor(Math.random() * 20 + 1);
}



// Random Number When Game start.
let randomNumber = generateRandomNumber();

// Number of times Check has been clicked.
let noOfGuessLeft = Number(document.querySelector('.score').textContent);


// Adding Click Event for Check Btn
document.querySelector('.check').addEventListener('click', function () {

    // Variable to store user's input and difference
    let guessNumber = Number(document.querySelector('.guess').value);
    let difference = randomNumber - guessNumber;
    let message = document.querySelector('.message').textContent;
    
    // Variables for storing high scores;
    let highscore = Number(document.querySelector('.highscore').textContent);
    let newHighscore = 10 - noOfGuessLeft + 1;

    if (noOfGuessLeft !== 0) {

        if (message !== '🎉 Correct Number!') {

            // Check if guessed number is within the random number range.
            if (!(guessNumber > 0 && guessNumber <= 20)) {
                document.querySelector('.message').textContent = '😔 Invalid Number';
            }
            // When User's guess is correct
            else if (guessNumber === randomNumber) {
                document.querySelector('.message').textContent = '🎉 Correct Number!';
                document.querySelector('.number').textContent = randomNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';


                // Logic for updating highscore Starts here.
                if (newHighscore < highscore && highscore !== 0) {
                    highscore = newHighscore;
                    document.querySelector('.highscore').textContent = highscore;
                } else if ( highscore === 0) {
                    highscore = newHighscore;
                    document.querySelector('.highscore').textContent = highscore;
                } else {
                    document.querySelector('.highscore').textContent = highscore;
                }
                // Logic for updating highscore Starts here.
                
                // event listener for Again button starts here;
                document.querySelector('.again').addEventListener('click', () => {
                    
                    document.querySelector('body').style.backgroundColor = '#222';
                    document.querySelector('.number').style.width = '15rem';
                    randomNumber = generateRandomNumber();
                    document.querySelector('.number').textContent = '?';
                    document.querySelector('.guess').value = '';
                    document.querySelector('.message').textContent = 'Start guessing...'
                    document.querySelector('.score').textContent = 10;
                    document.querySelector('.highscore').textContent = highscore;
                    
                    noOfGuessLeft = 10;
                    
                });
                // event listener for Again button Ends here;
            }
            // When user's guess is close to matching with random number;
            else if (difference < 7 && difference > -7) {
                document.querySelector('.message').textContent = '😚 So Close...';
            }
            // When user's guess is Far from matching with random number;
            else if (difference > 7 || difference < -7) {
                document.querySelector('.message').textContent = '😭  Too far';
            }
            noOfGuessLeft--
            document.querySelector('.score').textContent = noOfGuessLeft;
        }
    }
    // When User's don't have any remaining moves.
    else if (noOfGuessLeft === 0) {

        document.querySelector('h1').textContent = 'Game Over!'
        document.querySelector('.message').textContent = '😔 You lost the game.'
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.score').textContent = 0;

        // event listener for Again button;
        document.querySelector('.again').addEventListener('click', () => {

            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
            randomNumber = generateRandomNumber();
            document.querySelector('.number').textContent = '?';
            document.querySelector('.guess').value = '';
            document.querySelector('.message').textContent = 'Start guessing...'
            document.querySelector('.score').textContent = 10;
            document.querySelector('.highscore').textContent = highscore;

            noOfGuessLeft = 10;

        });

    }

});