const tetrisFigure = require('./tetrisFigure.js');
const tetrisBoard = require('./tetrisBoard.js');

module.exports = {
  getDroppedFigureBoard(board, position, figure) {
    let localPosition = Object.assign({}, position);
    while (this.canMoveDown(board, localPosition, figure)) {
      localPosition = this.moveDown(localPosition);
    }
    return this.addFigureToBoard(board, localPosition, figure);
  },
  isInFigure(figurePosition, figure, row, column) {
    const figureHeight = tetrisFigure.getHeight(figure);
    const figureWidth = tetrisFigure.getWidth(figure);
    const figureX = column - figurePosition.x;
    const figureY = row - figurePosition.y;
    const isInFigureBox = figureY >= 0
      && figureY < figureHeight
      && figureX >= 0
      && figureX < figureWidth;
    return isInFigureBox && figure[figureY][figureX];
  },
  clearFilledRows(board) {
    const boardWidth = tetrisBoard.getWidth(board);
    const boardHeight = tetrisBoard.getHeight(board);
    const nextBoard = tetrisBoard.getEmptyBoard(boardWidth, boardHeight);
    let row = 0;
    let nextBoardRow = 0;
    const isFilledRow = boardRow => !boardRow.includes(false);
    for (let row = 0; row < boardHeight; row++) {
      if (!isFilledRow(board[row])) {
        for (let column = 0; column < boardWidth; column++) {
          nextBoard[nextBoardRow][column] = board[row][column];
        }
        nextBoardRow += 1;
      }
    }
    return nextBoard;
  },
  addFigureToBoard(board, position, figure) {
    const boardHeight = tetrisBoard.getHeight(board);
    const boardWidth = tetrisBoard.getWidth(board);
    const figureHeight = tetrisFigure.getHeight(figure);
    const figureWidth = tetrisFigure.getWidth(figure);
    const nextBoard = tetrisBoard.getEmptyBoard(boardWidth, boardHeight);
    for (let row = 0; row < boardHeight; row++) {
      for (let column = 0; column < boardWidth; column++) {
        const figureX = column - position.x;
        const figureY = row - position.y;
        const isInFigureBox = figureY >= 0
          && figureY < figureHeight
          && figureX >= 0
          && figureX < figureWidth;
        nextBoard[row][column] = board[row][column]
          || (isInFigureBox && figure[figureY][figureX]);
      }
    }
    return this.clearFilledRows(nextBoard);
  },
  addFigureToTop(board, figure) {
    const y = tetrisBoard.getHeight(board) - tetrisFigure.getHeight(figure);
    return { board, figure, position: { y, x: 0 } };
  },
  canAddFigureToTop(board, figure) {
    const figureHeight = tetrisFigure.getHeight(figure);
    const figureWidth = tetrisFigure.getWidth(figure);
    const maxX = tetrisBoard.getWidth(board) - figureWidth;
    const y = tetrisBoard.getHeight(board) - figureHeight;
    let x = 0;
    while (x <= maxX && !this.isValidFigurePosition(board, { x, y }, figure)) {
      x += 1;
    }
    return x < maxX;
  },
  isFigureOverlappingBoard(board, position, figure) {
    const figureHeight = tetrisFigure.getHeight(figure);
    const figureWidth = tetrisFigure.getWidth(figure);
    for (let figureY = 0; figureY < figureHeight; figureY++) {
      for (let figureX = 0; figureX < figureWidth; figureX++) {
        const boardRow = position.y + figureY;
        const boardColumn = position.x + figureX;
        if (figure[figureY][figureX] && board[boardRow][boardColumn]) {
          return true;
        }
      }
    }
    return false;
  },
  isValidFigurePosition(board, figurePosition, figure) {
    const figureHeight = tetrisFigure.getHeight(figure);
    const figureWidth = tetrisFigure.getWidth(figure);
    const boardHeight = tetrisBoard.getHeight(board);
    const boardWidth = tetrisBoard.getWidth(board);
    return figurePosition.x >= 0
      && (figurePosition.x + figureWidth) <= boardWidth
      && figurePosition.y >= 0
      && (figurePosition.y + figureHeight) <= boardHeight
      && !this.isFigureOverlappingBoard(board, figurePosition, figure);
  },
  canMoveDown(board, position, figure) {
    return this.isValidFigurePosition(board, this.moveDown(position), figure);
  },
  canMoveLeft(board, position, figure) {
    return this.isValidFigurePosition(board, this.moveLeft(position), figure);
  },
  canMoveRight(board, position, figure) {
    return this.isValidFigurePosition(board, this.moveRight(position), figure);
  },
  moveDown(position) {
    return Object.assign({}, position, { y: position.y - 1 });
  },
  moveLeft(position) {
    return Object.assign({}, position, { x: position.x - 1 });
  },
  moveRight(position) {
    return Object.assign({}, position, { x: position.x + 1 });
  },
};
