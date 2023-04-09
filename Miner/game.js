const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const bombs = [1, 4, 6, 9]; // индексы ячеек с бомбами
let gameOver = false;

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameOver) return;
    if (bombs.includes(index)) {
      cell.style.backgroundColor = 'red';
      setTimeout(() => {
        alert('Неудача! Вы проиграли!');
        gameOver = true;
      }, 100);
    } else {
      cell.style.backgroundColor = 'green';
      setTimeout(() => {
        computerMove();
      }, 500);
    }
  });
});

function computerMove() {
  const availableMoves = [];
  cells.forEach((cell, index) => {
    if (!cell.style.backgroundColor) {
      availableMoves.push(index);
    }
  });

  if (availableMoves.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const cell = cells[availableMoves[randomIndex]];
    cell.style.backgroundColor = 'blue';
    if (bombs.includes(availableMoves[randomIndex])) {
      setTimeout(() => {
        alert('Поздравляю! Вы выиграли!');
        gameOver = true;
      }, 100);
    }
  } else {
    alert('Ничья!');
    gameOver = true;
  }
}