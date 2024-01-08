/*const scoreData = {
             wins: 0,
             losses: 0,
             ties: 0
         }*/ // Object in which scores are stored (Before localStorage)

         let scoreData = JSON.parse(localStorage.getItem('score')); //updating the scoreData object everytime with the localStorage

         if (scoreData === null) {
            scoreData = {
                wins: 0,
                losses: 0,
                ties: 0
            }
         }
         
    // const scoreData = JSON.parse(localStorage.getItem('score'));
    // console.log(scoreData);

    function playGame(playerMove) {

        let functionResultComputerMove =  pickComputerMove();
        
        let finalResult = '';

        if(playerMove === 'rock') {
            if(functionResultComputerMove === 'rock') {
            finalResult = `It's a tie!`;
            } else if(functionResultComputerMove === 'paper') {
                finalResult = 'You lose!';
            } else if (functionResultComputerMove === 'scissor') {
                finalResult = 'You win!';
            }
        } else if (playerMove === 'paper') {
            if(functionResultComputerMove === 'rock') {
            finalResult = 'You win!';
            } else if(functionResultComputerMove === 'paper') {
                finalResult = `It's a tie!`;
            } else if (functionResultComputerMove === 'scissor') {
                finalResult = 'You lose!';
            }
        } else if(playerMove = 'scissor') {
            if(functionResultComputerMove === 'rock') {
            finalResult = 'You lose!';
            } else if(functionResultComputerMove === 'paper') {
                finalResult = `You win!`;
            } else if (functionResultComputerMove === 'scissor') {
                finalResult = `It's a tie!`;
            }
        }

        if (finalResult === 'You win!') {
            scoreData.wins += 1;
        } else if (finalResult === 'You lose!') {
            scoreData.losses += 1;
        } else if (finalResult === `It's a tie!`) {
            scoreData.ties += 1;
        }

        // alert(`You selected ${playerMove}. Computer selected ${functionResultComputerMove}. Result: ${finalResult}\n Wins: ${scoreData.wins}, Losses: ${scoreData.losses}, Ties: ${scoreData.ties}`);

        document.querySelector('.js-final').innerHTML = `${finalResult}`;

        document.querySelector('.js-outcome').innerHTML = `You
            <img src="images/${playerMove}.png" alt="" class="move-icon restyle">
            <img src="images/${functionResultComputerMove}.png" alt="" class="move-icon restyle">
        Computer`

        localStorage.setItem('score',JSON.stringify(scoreData)); //Here, we are updating the local storage. Since localStorage only take string input, we are converting the scoreData object into a string. Now, we can access the score using localStorage.getItem('score')
        // console.log(localStorage.getItem('score'));

        document.querySelector('.js-score').innerHTML = `Wins: ${scoreData.wins}, Losses: ${scoreData.losses}, Ties: ${scoreData.ties}`;

    }


    function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber >= 0 && randomNumber < 1/3) {
            computerMove = 'rock';
        }else if(randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'paper';
        }else if(randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = 'scissor';
        }
        return computerMove;
    }

    function clearScoreData() {
        scoreData.wins = 0;
        scoreData.losses = 0;
        scoreData.ties = 0;
        localStorage.removeItem('score');
        // alert(`Score has been reset. Wins: ${scoreData.wins}, Losses: ${scoreData.losses}, Ties: ${scoreData.losses}`);
        document.querySelector('.js-final').innerHTML = 'Hello Player!'
        document.querySelector('.js-score').innerHTML = `Wins: ${scoreData.wins}, Losses: ${scoreData.losses}, Ties: ${scoreData.ties}`;
        document.querySelector('.js-outcome').innerHTML = 'Start a fresh game :)';
    }