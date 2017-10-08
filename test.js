const fs = require('fs');
const tap = require('tap');
const movement = require('./movement.js');
const stringGenerator = require('./stringGenerator.js');
const tetrisBoard = require('./tetrisBoard.js');
const tetrisFigure = require('./tetrisFigure.js');
const tetris = require('./tetris.js');
const tetrisFigures = require('./tetrisFigures.js');

const figureRotated90DegreesClockwise = [[false, true, true], [true, true, false]];
tap.same(
  tetrisFigure.rotate90DegreesClockwise(tetrisFigures.s),
  figureRotated90DegreesClockwise,
  'rotate90DegreesClockwise'
);
const figureRotated90DegreesCounterClockwise = [[false, true, true], [true, true, false]];
tap.same(
  tetrisFigure.rotate90DegreesCounterClockwise(tetrisFigures.s),
  figureRotated90DegreesClockwise
);

const figure2Rotated90DegreesCounterClockwise = [[true, false], [true, true], [true, false]];
tap.same(
  tetrisFigure.rotate90DegreesCounterClockwise(tetrisFigures.t),
  figure2Rotated90DegreesCounterClockwise
);

const emptyBoard = tetrisBoard.getEmptyBoard();
tap.same(emptyBoard.length, 20);
tap.same(emptyBoard[0].length, 10);
tap.same(emptyBoard[0][0], false);

const board = tetrisBoard.getEmptyBoard();
const position = { x: 0, y: 10 };
tap.same(movement.canMoveDown(board, position, tetrisFigures.s), true);
tap.same(movement.canMoveLeft(board, position, tetrisFigures.s), false);
tap.same(movement.canMoveRight(board, position, tetrisFigures.s), true);

const getNextFigure = () => tetrisFigures.s;
const nextState = tetris.getNextState(
  getNextFigure,
  tetrisBoard.getEmptyBoard(),
  { x: 0, y: 17 },
  tetrisFigures.s
);
tap.same(
  nextState,
  { board: tetrisBoard.getEmptyBoard(), position: { x: 0, y: 16 }, figure: tetrisFigures.s, done: false }
);

const droppedFigureBoard = movement.getDroppedFigureBoard(tetrisBoard.getEmptyBoard(), { x: 0, y: 17 }, tetrisFigures.z);
const expectedDroppedFigureBoard = tetrisBoard.getEmptyBoard();
expectedDroppedFigureBoard[2][0] = true;
expectedDroppedFigureBoard[1][0] = true;
expectedDroppedFigureBoard[1][1] = true;
expectedDroppedFigureBoard[0][1] = true;
tap.same(droppedFigureBoard, expectedDroppedFigureBoard);
const expectedString = fs.readFileSync('./testBoards/droppedFigureBoard.txt', 'utf8').trim()
const actualString = stringGenerator.getString(droppedFigureBoard)
tap.equal(
  actualString,
  expectedString
);
