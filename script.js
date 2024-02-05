document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const status = document.getElementById('status');
    const resetButton = document.querySelector('.reset-button');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Create the game grid
    for (let i = 0; i < 9; i++) 
    {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', () => handleCellClick(i));
        grid.appendChild(cell);
    }

    // Handle cell click
    function handleCellClick(index) 
    {
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            updateGrid();
            checkWinner();
            togglePlayer();
        }
    }

    // Update the grid based on the game board
    function updateGrid() 
    {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
        });
    }

    // Check for a winner or a draw
    function checkWinner() 
    {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) 
        {
            const [a, b, c] = pattern;
            if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
                gameActive = false;
                announceWinner(gameBoard[a]);
                return;
            }
        }

        if (!gameBoard.includes('')) {
            gameActive = false;
            announceWinner('draw');
        }
    }

    // Toggle between X and O players
    function togglePlayer() 
    {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Announce the winner or draw
    function announceWinner(winner) 
    {
        if (winner === 'draw') {
            status.textContent = 'It\'s a draw!';
        } else {
            status.textContent = `Player ${winner} wins!`;
            status.style.color = winner === 'X' ? '#4CAF50' : '#2196F3';
        }
        resetButton.style.display = 'block';
    }

    // Reset the game
    function resetGame() 
    {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        status.textContent = '';
        status.style.color = '#333';
        currentPlayer = 'X';
        updateGrid();
        resetButton.style.display = 'none';
    }

    // Add event listener to the reset button
    resetButton.addEventListener('click', resetGame);
});
