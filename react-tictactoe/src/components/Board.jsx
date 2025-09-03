
const Board = ({ board }) => {

    return (
        <div className='buttons'>
            <h2>Game ongoing</h2>

            <div className="fstRow row"> {board[0]} {board[1]} {board[2]} </div>
            <div className="sndRow row"> {board[3]} {board[4]} {board[5]} </div>
            <div className="thirdRow row"> {board[6]} {board[7]} {board[8]} </div>
        </div>
    );
}

export default Board;