import { useState } from 'react';
import Board from './Board'

const Game = () => {

    let initialBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    const [board, setBoard] = useState(initialBoard);
    const [turn, setTurn] = useState(0);
    /*  const [res,setRes]=useState(false);
 
     function checkWinner() {
 
     } */

    function handleXO(index) {

        let currentPlayer = ' ';
        if (turn % 2 === 0) {
            currentPlayer = 'X';
        } else {
            currentPlayer = 'O';
        }

        const currentBoard = board.map((c, i) => {
            if (i === index && c === ' ') {
                setTurn(turn + 1);
                return c = currentPlayer;
            } else {
                return c;
            }
        });
        setBoard(currentBoard);
    }

    return (
        <>
            <Board board={board.map((cell, i) => (
                <button key={i} onClick={() => { handleXO(i); }}>{cell}</button>
            ))} />
        </>
    );

}

export default Game;