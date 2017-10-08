const movement = require('./movement.js');
const tetrisBoard = require('./tetrisBoard.js');

module.exports = {
  getNextState(getNextFigure, board, position, figure) {
    if (movement.canMoveDown(board, position, figure)) {
      return { board, position: movement.moveDown(position), figure, done: false, isNewFigure: false };
    }
    const nextBoard = movement.addFigureToBoard(board, position, figure);
    const nextFigure = getNextFigure();
    if (!movement.canAddFigureToTop(nextBoard, nextFigure)) {
      return { board: nextBoard, position: { x: 0, y: 0 }, figure: nextFigure, done: true, isNewFigure: false };
    }
    return Object.assign({}, movement.addFigureToTop(nextBoard, nextFigure), { done: false, isNewFigure: true });
  },
  getInitialState(getNextFigure) {
    return Object.assign(
      {},
      movement.addFigureToTop(tetrisBoard.getEmptyBoard(), getNextFigure()),
      { done: false, isNewFigure: true }
    );
  },
};
