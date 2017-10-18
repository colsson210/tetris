const tap = require('tap');
const tetris = require('./tetris.js');
const oneSlotEmptyBoard = [[false]];
const oneSlotFilledBoard = [[true]];
const zeroPosition = { x: 0, y: 0 };
const oneSlotFigure = [[true]];
const getNextFigure = () => oneSlotFigure;
const expectedNextState = {
  board: [[false], [false]],
  position: { x: 0, y: 0 },
  figure: oneSlotFigure,
  isNewFigure: false,
  done: false,
};
const actualNextState = tetris.getNextState(
  getNextFigure,
  [[false], [false]],
  { x: 0, y: 1 },
  oneSlotFigure
);
tap.same(actualNextState, expectedNextState);


const expectedNextState2 = {
  board: [[false]],
  position: { x: 0, y: 0 },
  figure: oneSlotFigure,
  isNewFigure: false,
  done: true,
};
const actualNextState2 = tetris.getNextState(getNextFigure, oneSlotEmptyBoard, zeroPosition, oneSlotFigure);
tap.same(actualNextState2, expectedNextState2);

const expectedNextState3 = {
  board: [[true, false], [false, false]],
  position: { x: 0, y: 1 },
  figure: oneSlotFigure,
  isNewFigure: true,
  done: false,
};
const actualNextState3 = tetris.getNextState(getNextFigure, [[false, false], [false, false]], zeroPosition, oneSlotFigure);
tap.same(actualNextState3, expectedNextState3);

const expectedNextState4 = {
  board: [[true]],
  position: { x: 0, y: 0 },
  figure: oneSlotFigure,
  isNewFigure: false,
  done: true,
};
const actualNextState4 = tetris.getNextState(getNextFigure, oneSlotFilledBoard, zeroPosition, oneSlotFigure);
tap.same(actualNextState4, expectedNextState4);

const expectedInitialState = {
  board: oneSlotEmptyBoard,
  done: false,
  figure: oneSlotFigure,
  isNewFigure: true,
  position: zeroPosition,
};
const actualInitialState = tetris.getInitialState(getNextFigure, { boardWidth: 1, boardHeight: 1 });
tap.same(actualInitialState, expectedInitialState)
