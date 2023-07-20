


function getComputerChoice(array) {
    const rand = Math.random() * array.length | 0;
    const rValue = array[rand]
    return rValue
}

const myArray = ["Rock", "Paper", "Scissors"];
const rValue = getComputerChoice(myArray)




function playRaund(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    console.log("ничья") 
} else if ( computerSelection == "Paper") {
    console.log("компютер проиграл")
} else if ( computerSelection == "Scissors") {
    console.log("компютер выиграл")
} else {  ( computerSelection == "    ") 
console.log("не известное значение")
}
}

const computerSelection = getComputerChoice(myArray)
console.log(playRaund(computerSelection, playerSelection))

