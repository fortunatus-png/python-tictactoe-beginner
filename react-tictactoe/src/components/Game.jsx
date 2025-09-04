import { useState } from 'react';
import Board from './Board';
import CheckWinner from './CheckWinner';

const Game = () => {

    let initialBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    const [board, setBoard] = useState(initialBoard);
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(null);

    let currentPlayer = turn % 2 === 0 ? 'X' : 'O';

    function handleXO(index) {
        if (board[index] !== ' ' || winner) return;

        const newBoard = board.slice();
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setTurn(turn + 1);

        const result = CheckWinner(newBoard);
        if (result) {
            setWinner(result);
            return;
        }
    }

    function restart() {
        setBoard(initialBoard);
        setTurn(0);
        setWinner(null);
    }

    return (
        <div className='container'>

            <div className='first'>
                <h2>
                    {
                        winner ? `Player ${winner} wins!` : turn === 9
                            ? "It's a draw!" : `Next player ${currentPlayer}`
                    }
                </h2>
            </div>

            <div className='second'>
                <Board board={board.map((cell, i) => (
                    <button className='btn' key={i} onClick={() => { handleXO(i); }}>{cell}</button>
                ))} />
            </div>

            <div className='third'>
                <button className='res' onClick={restart}>Restart Game</button>
            </div>
        </div>
    );
}

export default Game;