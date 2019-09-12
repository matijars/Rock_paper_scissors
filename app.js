// Game
const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match')

    playButton.addEventListener('click', () => {
      introScreen.classList.add("fade-out");
      match.classList.add("fade-in");
    });
  };

  // Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = "";
      })
    })
    // Computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        // Computer choice
        const computerNumber = Math.floor(Math.random() *3);
        const computerChoice = computerOptions[computerNumber];
        
        setTimeout(() => {
          // Compare hands
        compareHands(this.textContent, computerChoice);

        // Images update
        playerHand.src = `img/${this.textContent}.png`;
        computerHand.src = `img/${computerChoice}.png`;
        }, 750)

        // Animations
        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
      });
    });
  };

  // Update score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }

  const compareHands = (playerChoice, computerChoice) => {
    // Header text update
    const winner = document.querySelector(".winner");

    // Check for a tie
    if(playerChoice === computerChoice) {
      winner.textContent = 'Its is a tie!';
      return;
    }
    // Check for rock
    if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Player Wins!'
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer Wins!'
        cScore++;
        updateScore();
        return;
      }
    }
    // Check for paper
    if(playerChoice === 'paper'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Computer Wins!'
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player Wins!'
        pScore++;
        updateScore();
        return;
      }
    }
    // Check for scissors
    if(playerChoice === 'scissors'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Computer Wins!'
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player Wins!'
        pScore++;
        updateScore();
        return;
      }
    }
  }

  // Calling inner functions
  startGame();
  playMatch();
  
};

// Start the game function
game();