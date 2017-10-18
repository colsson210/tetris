const tap = require('tap');

const tetrisStrategy = require('./tetrisStrategy.js');

const board = [[true, false], [false, false]];
const oneSlotFigure = [[true]];
const startPosition = { x: 0, y: 1 };

const expectedMove = { figure: oneSlotFigure, position: { x: 1, y: 1 }};
const actualMove = tetrisStrategy.getMove(board, startPosition, oneSlotFigure);
tap.same(actualMove, expectedMove);
