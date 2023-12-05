function getComputerChoice() {
    // Function body
    let options = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * options.length);
    let selectedOption = options[randomIndex];

    // Return the selected option
    return selectedOption;
}

// Function call and use the result
let computerChoice = getComputerChoice();
console.log('Computer chose: ' + computerChoice);

function getUserChoice() {
    // Use the prompt function to get user input
    let userChoice = prompt('Enter your choice (rock, paper, or scissor):');

    // Return the user's choice
    return userChoice;
}

// Function call and use the result
let userChoice = getUserChoice();
console.log('User chose: ' + userChoice);

const TIES = 'It\'s a tie!';
const youWin = 'You Win! Rock beats Scissor';
const youWin1 = 'You Win! Paper beats Rock';
const youWin2 = 'You Win! Scissor beats Paper';
const compWin = 'Comp Win! rock beats Scissor';
const compWin1 = 'Comp Win! Paper beats Rock';
const compWin2 = 'Comp Win! Scissor beats Paper';

function play(computerChoice, userChoice) {
    // Check if userChoice is equal to computerChoice
    if (userChoice === computerChoice) {
        // Return the constant TIES
        return TIES;
    } else if (userChoice === "rock" && computerChoice === "scissor") {
        return youWin;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return youWin1;
    } else if (userChoice === "scissor" && computerChoice === "paper") {
        return youWin2;
    } else if (userChoice === "scissor" && computerChoice === "rock") {
        return compWin;
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return compWin1;
    } else if (userChoice === "paper" && computerChoice === "scissor") {
        return compWin2;
    } else {
        // Default case when none of the conditions match
        return 'Invalid input or unexpected scenario.';
    }

}

// Function definitions and constants (same as your previous code)

// Function definitions and constants (same as your previous code)

// First game
let computerChoice1 = getComputerChoice();
let userChoice1 = getUserChoice();
let result1 = play(computerChoice1, userChoice1);
console.log('Game 1:', result1);

// Second game
let computerChoice2 = getComputerChoice();
let userChoice2 = getUserChoice();
let result2 = play(computerChoice2, userChoice2);
console.log('Game 2:', result2);

// Third game
let computerChoice3 = getComputerChoice();
let userChoice3 = getUserChoice();
let result3 = play(computerChoice3, userChoice3);
console.log('Game 3:', result3);

// Fourth game
let computerChoice4 = getComputerChoice();
let userChoice4 = getUserChoice();
let result4 = play(computerChoice4, userChoice4);
console.log('Game 4:', result4);

// Fifth game
let computerChoice5 = getComputerChoice();
let userChoice5 = getUserChoice();
let result5 = play(computerChoice5, userChoice5);
console.log('Game 5:', result5);


