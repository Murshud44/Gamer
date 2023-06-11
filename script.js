'use strict'

const gridSize = 4;
const grid = [];


for (let i = 1; i <= gridSize * gridSize; i++) {
  grid.push(i);
}
shuffleArray(grid);


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


let currentNumber = 1;


const cells = document.getElementsByClassName('cell');
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick);
}


function handleClick() {
  const clickedNumber = parseInt(this.textContent);
  
  if (clickedNumber === currentNumber) {

    this.style.backgroundColor = 'green';
    currentNumber++;
    
    if (currentNumber > gridSize * gridSize) {
      
      alert('Congratulations! You won the game!');
      resetGame();
    }
  } else {
    
    alert('Game over! You clicked the wrong number.');
    resetGame();
  }
}

function resetGame() {
  currentNumber = 1;
  shuffleArray(grid);
  
  
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '';
    cells[i].textContent = grid[i];
  }
}
