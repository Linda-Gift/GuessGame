const readline = require('readline')

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Function to start the guessing game
function startGame() {
  const minRange = 1
  const maxRange = 100
  const targetNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange // Random number within range
  let attempts = 0

  console.log("\nWelcome to the Number Guessing GameBoot!")
  console.log(`In this game, I have selected a number between ${minRange} and ${maxRange}. Try to guess the Number!\n`)
  console.log("Your job is to guess the number. I'll guide you along the way until you get it right!\n")

  function guessTheNumber() {
    readLine.question("Enter your guess: ", (input) => {
      const guess = parseInt(input) // Converts input to a number

      // This validates the input
      if (isNaN(guess)) {
        console.log("This is not a Number, Please enter a valid number.\n")
        guessTheNumber() // This prompts again if input is not a number
        return
      }

      if (guess < minRange || guess > maxRange) {
        console.log(`Oops! Your guess must be between ${minRange} and ${maxRange}.\n`)
        guessTheNumber() // Prompts if out of range
        return
      }

      attempts++

      // Check the number guessed
      if (guess < targetNumber) {
        console.log("Oops! Number guessed too low! Try again.\n")
        guessTheNumber()
      } else if (guess > targetNumber) {
        console.log("Oops! Number guessed too high! Try again.\n")
        guessTheNumber()
      } else {
        console.log(`🎉 Correct! You guessed the number in ${attempts} attempts.\n`)
        playAgain()
      }
    })
  }

  // this is a function to ask if the player wants to play again
  function playAgain() {
    readLine.question("Do you want to play again? (yes/no): ", (answer) => {
      const lowerCaseAnswer = answer.toLowerCase();
      if (lowerCaseAnswer === "yes") {
        startGame()
      } else {
        console.log("Thanks for playing! Goodbye.")
        readLine.close()
      }
    })
  }

  guessTheNumber() // Start the game loop
}

startGame()
