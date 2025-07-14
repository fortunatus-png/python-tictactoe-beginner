import os

board = [' '] * 9

def display_board():
    print(f""" 
             -------------
             | {board[0]} | {board[1]} | {board[2]} |
             -------------
             | {board[3]} | {board[4]} | {board[5]} |
             -------------
             | {board[6]} | {board[7]} | {board[8]} |
             -------------
        """)

game_running = True
turn = 0
has_winner = False

def check_winner():
    wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for a,b,c in wins:
        if board[a] == board[b] == board[c] and board[a] != ' ':
            return True
    return False

while game_running:
    os.system('cls' if os.name == 'nt' else 'clear')
    display_board()
    
    current_player = 'X' if turn % 2 == 0 else 'O'
    try:
        user_input = input(f"Player {current_player}, enter a number from 1 to 9 or 'q' to quit: ")
        if user_input.lower() == 'q':
            game_running = False
            break
        move = int(user_input)
        if 1 <= move <= 9:
            if board[move - 1] == ' ':
                board[move - 1] = current_player
                turn += 1
            else:
                print("That cell is already occupied. Press Enter to try again.")
                input()
        else:
            print("Invalid number. Please enter a number from 1 to 9.")
            input()
    except ValueError:
        print("Invalid input. Please enter a number from 1 to 9 or 'q' to quit.")
        input
        
    if check_winner(): has_winner, game_running  = True, False
    elif turn == 9:
        game_running = False

# Final board state
os.system('cls' if os.name == 'nt' else 'clear')
display_board()
    
if has_winner:
    winner = 'O' if turn % 2 == 0 else 'X'
    print(f"Player {winner} wins!")
else:
    print("It's a draw!")
    
print("Thanks for playing!")
        