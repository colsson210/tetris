const tetrisBoard = require('./tetrisBoard.js');
const tetrisMovement = require('./tetrisMovement.js');

module.exports = {
  getString(board, figurePosition = false, figure = false) {
    const boardHeight = tetrisBoard.getHeight(board);
    const boardWidth = tetrisBoard.getWidth(board);
    const lines = [];
    for (let row = 0; row < boardHeight; row++) {
      const line = [];
      for (let column = 0; column < boardWidth; column++) {
        line.push(
          (figure && tetrisMovement.isInFigure(figurePosition, figure, row, column))
            ? '*'
            : (board[row][column] ? 'x' : '.')
        );
      }
      lines.push(line.join(''));
    }
    return lines.reverse().join('\n');
  },
};
