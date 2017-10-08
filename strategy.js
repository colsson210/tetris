const movement = require('./movement.js');
const tetrisFigure = require('./tetrisFigure.js');
const tetrisBoard = require('./tetrisBoard.js');

module.exports = {
  getMove(board, position, figure) {
    const boardHeight = tetrisBoard.getHeight(board);
    const boardWidth = tetrisBoard.getWidth(board);
    const rotatedFigures = [];
    let currentFigure = tetrisFigure.copyFigure(figure);
    for (let i = 0; i < 4; i++) {
      rotatedFigures.push(currentFigure);
      currentFigure = tetrisFigure.rotate90DegreesClockwise(currentFigure);
    }
    let lowestMaxHeight = 20;
    let bestFigure;
    let bestPosition;
    for (let rotatedFiguresIndex = 0; rotatedFiguresIndex < rotatedFigures.length; rotatedFiguresIndex++) {
      const rotatedFigure = rotatedFigures[rotatedFiguresIndex];
      const figureHeight = tetrisFigure.getHeight(rotatedFigure);
      const figureWidth = tetrisFigure.getWidth(rotatedFigure);
      const maxX = boardWidth - figureWidth;
      const y = boardHeight - figureHeight;
      for (let x = 0; x <= maxX; x++) {
        const currentPosition = { x, y };
        const droppedFigureBoard = movement.getDroppedFigureBoard(board, currentPosition, rotatedFigure);
        const maxHeight = tetrisBoard.getMaxHeight(droppedFigureBoard);
        if (maxHeight < lowestMaxHeight) {
          lowestMaxHeight = maxHeight;
          bestFigure = rotatedFigure;
          bestPosition = currentPosition;
        }
      }
    }
    return { figure: bestFigure, position: bestPosition };
  },
};
