export default function CheckWinner(board) {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const [a, b, c] of wins) {
        if (board[a] === board[b] && board[b] === board[c] && board[a] !== ' ') {
            return board[a];
        }
    }
    return null;
}