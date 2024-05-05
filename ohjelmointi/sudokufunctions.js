const GRID_SIZE = 9;

var sudokuGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

var correctAttempts = 0;
var incorrectAttempts = 0;

function initializeSudokuBoard() {
    var board = document.getElementById('sudoku-board');
    for (var i = 0; i < GRID_SIZE; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < GRID_SIZE; j++) {
            var cell = document.createElement('td');
            var input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.value = sudokuGrid[i][j] !== 0 ? sudokuGrid[i][j] : '';
            input.readOnly = sudokuGrid[i][j] !== 0; 
            input.className = 'sudoku-cell';
            input.dataset.row = i;
            input.dataset.col = j;
            input.addEventListener('input', validateSudoku); 
            cell.appendChild(input);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    updateAttemptsCounter();
}

function solveSudoku() {
    if (backtrackSudoku(0, 0)) {
        alert("Sudoku solved!");
    } else {
        alert("Unable to solve Sudoku.");
    }
}

function backtrackSudoku(row, col) {
    if (row === GRID_SIZE) {
        return true;
    }

    if (col === GRID_SIZE) {
        return backtrackSudoku(row + 1, 0);
    }

    if (sudokuGrid[row][col] !== 0) {
        return backtrackSudoku(row, col + 1);
    }

    for (let num = 1; num <= GRID_SIZE; num++) {
        if (isValidMove(row, col, num)) {
            sudokuGrid[row][col] = num;
            if (backtrackSudoku(row, col + 1)) {
                return true;
            }
            sudokuGrid[row][col] = 0; 
        }
    }

    return false;
}

function isValidMove(row, col, num) {
    for (let i = 0; i < GRID_SIZE; i++) {
        if (sudokuGrid[row][i] === num || sudokuGrid[i][col] === num) {
            return false;
        }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudokuGrid[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }

    return true;
}



function resetSudoku() {
    sudokuGrid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];
    var board = document.getElementById('sudoku-board');
    board.innerHTML = '';
    initializeSudokuBoard();
}

function validateSudoku() {
    var row = parseInt(this.dataset.row);
    var col = parseInt(this.dataset.col);
    var value = parseInt(this.value);
    if (isNaN(value)) return;     
    for (var i = 0; i < GRID_SIZE; i++) {
        if (i !== col && sudokuGrid[row][i] === value) {
            this.classList.add('incorrect');
            incorrectAttempts++;
            updateAttemptsCounter();
            return;
        }
    }
    for (var j = 0; j < GRID_SIZE; j++) {
        if (j !== row && sudokuGrid[j][col] === value) {
            this.classList.add('incorrect');
            incorrectAttempts++;
            updateAttemptsCounter();
            return;
        }
    }
    var sectionStartRow = Math.floor(row / 3) * 3;
    var sectionStartCol = Math.floor(col / 3) * 3;
    for (var i = sectionStartRow; i < sectionStartRow + 3; i++) {
        for (var j = sectionStartCol; j < sectionStartCol + 3; j++) {
            if ((i !== row || j !== col) && sudokuGrid[i][j] === value) {
                // Incorrect value in the same 3x3 section
                this.classList.add('incorrect');
                incorrectAttempts++;
                updateAttemptsCounter();
                return;
            }
        }
    }
    this.classList.remove('incorrect');
    correctAttempts++;
    updateAttemptsCounter();
}

function updateAttemptsCounter() {
    document.getElementById('correct-attempts').textContent = correctAttempts;
    document.getElementById('incorrect-attempts').textContent = incorrectAttempts;
}

window.onload = initializeSudokuBoard;
