
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

function displayBoard() {
    console.log(`
        -------------
        | ${board[0]} | ${board[1]} | ${board[2]} | 
        -------------
        | ${board[3]} | ${board[4]} | ${board[5]} |
        -------------
        | ${board[6]} | ${board[7]} | ${board[8]} |
        -------------
        `);
}

let gameRunnig = true;
let turn = 0;
let hasWinner = false;

function checkWinner() {
    wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const [a, b, c] of wins) {
        if (board[a] === board[b] && board[b] === board[c] && board[a] !== ' ') {
            return true;
        }
    }
    return false;
}

while (gameRunnig) {
    console.clear();
    displayBoard();

    let currentPlayer = ' ';
    if (turn % 2 === 0) {
        currentPlayer = 'X';
    } else {
        currentPlayer = 'O';
    }

    try {
        let userInput = prompt("Enter a number from 1 to 9 or 'q' to quit: ");
        if (userInput.toLowerCase() === 'q') {
            gameRunnig = false;
            break;
        }
        let move = parseInt(userInput);
        if (move >= 1 && move <= 9) {
            if (board[move - 1] === ' ') {
                board[move - 1] = currentPlayer;
                turn++;
            } else {
                prompt("That cell is already occupied. Press Enter to try again.")
            }
        } else {
            prompt("Invalid number. Please enter a number from 1 to 9.")
        }
    } catch (error) {
        prompt("Invalid input. Please enter a number from 1 to 9 or 'q' to quit.")
    }

    if (checkWinner()) {
        hasWinner = true;
        gameRunnig = false;
    } else if (turn === 9) {
        gameRunnig = false;
    }
}
console.clear();
displayBoard();

if (hasWinner) {
    let winner = ' ';
    if (turn % 2 === 0) {
        winner = 'O';
    } else {
        winner = 'X';
    }
    console.log(`Player ${winner} wins!`);
} else {
    console.log("It's a draw!");
}
console.log("Thanks for playing!");