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

function play(computerChoice, userChoice) {
    // Check if userChoice is equal to computerChoice
    if (userChoice === computerChoice) {
        // Return the constant TIES
        return TIES;
    }
}
