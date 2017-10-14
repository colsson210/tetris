const fs = require('fs-extra');
const tap = require('tap');
const movement = require('./movement.js');
const stringGenerator = require('./stringGenerator.js');
const tetrisBoard = require('./tetrisBoard.js');
const tetrisFigure = require('./tetrisFigure.js');
const tetris = require('./tetris.js');
const tetrisFigures = require('./tetrisFigures.js');


tap.same(tetrisFigure.copyFigure(tetrisFigures.s), tetrisFigures.s);

const figureRotated90DegreesClockwise = [[true, true, false], [false, true, true]];
tap.same(
  tetrisFigure.rotate90DegreesClockwise(tetrisFigures.s),
  figureRotated90DegreesClockwise,
  'rotate90DegreesClockwise'
);
const figureRotated90DegreesCounterClockwise = [[true, true, false], [false, true, true]];
tap.same(
  tetrisFigure.rotate90DegreesCounterClockwise(tetrisFigures.s),
  figureRotated90DegreesCounterClockwise
);

const figure2Rotated90DegreesCounterClockwise = [[false, true], [true, true], [false, true]];
tap.same(
  tetrisFigure.rotate90DegreesCounterClockwise(tetrisFigures.t),
  figure2Rotated90DegreesCounterClockwise
);

const board = tetrisBoard.getEmptyBoard(10, 20);
const position = { x: 0, y: 10 };
tap.same(movement.canMoveDown(board, position, tetrisFigures.s), true);
tap.same(movement.canMoveLeft(board, position, tetrisFigures.s), false);
tap.same(movement.canMoveRight(board, position, tetrisFigures.s), true);

const getNextFigure = () => tetrisFigures.s;
const nextState = tetris.getNextState(
  getNextFigure,
  tetrisBoard.getEmptyBoard(10, 20),
  { x: 0, y: 17 },
  tetrisFigures.s
);
tap.same(
  nextState,
  { board: tetrisBoard.getEmptyBoard(10, 20), position: { x: 0, y: 16 }, figure: tetrisFigures.s, done: false, isNewFigure: false }
);

const droppedFigureBoard = movement.getDroppedFigureBoard(tetrisBoard.getEmptyBoard(10, 20), { x: 0, y: 17 }, tetrisFigures.z);
const expectedDroppedFigureBoard = tetrisBoard.getEmptyBoard(10, 20);
expectedDroppedFigureBoard[2][1] = true;
expectedDroppedFigureBoard[1][0] = true;
expectedDroppedFigureBoard[1][1] = true;
expectedDroppedFigureBoard[0][0] = true;
tap.same(droppedFigureBoard, expectedDroppedFigureBoard);
/*
const expectedString = fs.readFileSync('./testBoards/droppedFigureBoard.txt', 'utf8').trim()
const actualString = stringGenerator.getString(droppedFigureBoard)
tap.equal(
  actualString,
  expectedString
);
const expectedString2 = fs.readFileSync('./testBoards/singleS-FigureTopLeft.txt', 'utf8').trim()
const actualString2 = stringGenerator.getString(tetrisBoard.getEmptyBoard(10, 20), { x: 0, y: 17 }, tetrisFigures.s);
tap.equal(
  actualString2,
  expectedString2
);
*/
tap.same(tetrisBoard.getMaxHeight(droppedFigureBoard), 3);
tap.same(tetrisBoard.getMaxHeight(tetrisBoard.getEmptyBoard(10, 20)), 0);

const expectNewFigure = {
  "board": [
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]
  ],
  "figure": [
    [
      false,
      true
    ],
    [
      true,
      true
    ],
    [
      true,
      false
    ]
  ],
  "position": {
    "y": 17,
    "x": 0
  },
  "done": false,
  "isNewFigure": true
};
tap.same(tetris.getInitialState(() => tetrisFigures.s, 10, 20), expectNewFigure);
// tap.same()
const expectedNextState = {
  "board": [
    [
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]
  ],
  "figure": [
    [
      false,
      true
    ],
    [
      true,
      true
    ],
    [
      true,
      false
    ]
  ],
  "position": {
    "y": 17,
    "x": 0
  },
  "done": false,
  "isNewFigure": true
}
const actualNextState = tetris.getNextState(() => tetrisFigures.s, tetrisBoard.getEmptyBoard(10, 20), { x: 0, y: 0 }, tetrisFigures.s);
tap.same(actualNextState, expectedNextState);
// fs.outputFile('./abc.txt', JSON.stringify(expectedNextState, null, 2));

tap.same(movement.clearFilledRows([[true]]), [[false]]);


const canAddFigureToTopBoard = tetrisBoard.getEmptyBoard(2, 2);
canAddFigureToTopBoard[0][0] = true;
tap.same(movement.canAddFigureToTop(canAddFigureToTopBoard, tetrisFigures.o), false);

const actualFilledNextState = tetris.getNextState(() => tetrisFigures.o, canAddFigureToTopBoard, { x: 0, y: 0 }, tetrisFigures.o);
const expectedFilledNextState = { board: canAddFigureToTopBoard, position: { x: 0, y: 0 }, figure: tetrisFigures.o, done: true, isNewFigure: false };
tap.same(actualFilledNextState, expectedFilledNextState);
