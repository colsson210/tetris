const movement = require('./movement.js');
const tetrisBoard = require('./tetrisBoard.js');

module.exports = {
  getNextState(getNextFigure, board, position, figure) {
    if (movement.canMoveDown(board, position, figure)) {
      return { board, position: movement.moveDown(position), figure, done: false, isNewFigure: false };
    }
    const canAddFigureToTopBoard = movement.isValidFigurePosition(board, position, figure);
    const nextBoard = canAddFigureToTopBoard ? movement.addFigureToBoard(board, position, figure) : board;
    const nextFigure = getNextFigure();
    if (!movement.canAddFigureToTop(nextBoard, nextFigure)) {
      return { board: nextBoard, position: { x: 0, y: 0 }, figure: nextFigure, done: true, isNewFigure: false };
    }
    return Object.assign({}, movement.addFigureToTop(nextBoard, nextFigure), { done: false, isNewFigure: true });
  },
  getInitialState(getNextFigure, boardWidth, boardHeight) {
    return Object.assign(
      {},
      movement.addFigureToTop(tetrisBoard.getEmptyBoard(boardWidth, boardHeight), getNextFigure()),
      { done: false, isNewFigure: true }
    );
  },
};
