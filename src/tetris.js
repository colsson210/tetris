const tetrisMovement = require('./tetrisMovement.js');
const tetrisBoard = require('./tetrisBoard.js');

module.exports = {
  getNextState(getNextFigure, board, position, figure) {
    if (tetrisMovement.canMoveDown(board, position, figure)) {
      return { board, position: tetrisMovement.moveDown(position), figure, done: false, isNewFigure: false };
    }
    const canAddFigureToTopBoard = tetrisMovement.isValidFigurePosition(board, position, figure);
    const nextBoard = canAddFigureToTopBoard ? tetrisMovement.addFigureToBoard(board, position, figure) : board;
    const nextFigure = getNextFigure();
    if (!tetrisMovement.canAddFigureToTop(nextBoard, nextFigure)) {
      return { board: nextBoard, position: { x: 0, y: 0 }, figure: nextFigure, done: true, isNewFigure: false };
    }
    return Object.assign({}, tetrisMovement.addFigureToTop(nextBoard, nextFigure), { done: false, isNewFigure: true });
  },
  getInitialState(getNextFigure, boardWidth, boardHeight) {
    return Object.assign(
      {},
      tetrisMovement.addFigureToTop(tetrisBoard.getEmptyBoard({ width: boardWidth, height: boardHeight }), getNextFigure()),
      { done: false, isNewFigure: true }
    );
  },
};
