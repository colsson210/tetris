const tap = require('tap');
const tetrisMovement = require('./tetrisMovement.js');

const oneSlotEmptyBoard = [[false]];
const oneSlotFilledBoard = [[true]];
const zeroPosition = { x: 0, y: 0 };
const oneSlotFigure = [[true]];

const expectedCanMoveDown = false;
const actualCanMoveDown = tetrisMovement.canMoveDown(oneSlotEmptyBoard, zeroPosition, oneSlotFigure);
tap.same(actualCanMoveDown, expectedCanMoveDown);

const expectedCanMoveDownTrue = true;
const actualCanMoveDownTrue = tetrisMovement.canMoveDown([[false], [false]], { x: 0, y: 1 }, oneSlotFigure);
tap.same(actualCanMoveDownTrue, expectedCanMoveDownTrue);

const expectedCanMoveLeft = false;
const actualCanMoveLeft = tetrisMovement.canMoveLeft(oneSlotEmptyBoard, zeroPosition, oneSlotFigure);
tap.same(actualCanMoveLeft, expectedCanMoveLeft);

const expectedCanMoveRight = false;
const actualCanMoveRight = tetrisMovement.canMoveRight(oneSlotEmptyBoard, zeroPosition, oneSlotFigure);
tap.same(actualCanMoveRight, expectedCanMoveRight);

const expectedDroppedFigureBoard = [[false], [false]];
const actualDroppedFigureBoard = tetrisMovement.getDroppedFigureBoard([[false], [false]], { x: 0, y: 1 }, oneSlotFigure);
tap.same(actualDroppedFigureBoard, expectedDroppedFigureBoard);

const expectedDroppedFigureBoard2 = [[true, false], [false, false]];
const actualDroppedFigureBoard2 = tetrisMovement.getDroppedFigureBoard([[false, false], [false, false]], { x: 0, y: 1 }, oneSlotFigure);
tap.same(actualDroppedFigureBoard2, expectedDroppedFigureBoard2);

const expectedClearFilledRows = [[false]];
const actualClearFilledRows = tetrisMovement.clearFilledRows(oneSlotFilledBoard);
tap.same(actualClearFilledRows, expectedClearFilledRows);

const expectedCanAddFigureToTop = false;
const actualCanAddFigureToTop = tetrisMovement.canAddFigureToTop(oneSlotFilledBoard, oneSlotFigure);
tap.same(actualCanAddFigureToTop, expectedCanAddFigureToTop);

const expectedAddFigureToTop = { board: oneSlotEmptyBoard, figure: oneSlotFigure, position: zeroPosition };
const actualAddFigureToTop = tetrisMovement.addFigureToTop(oneSlotEmptyBoard, oneSlotFigure);
tap.same(actualAddFigureToTop, expectedAddFigureToTop);

const expectedMoveDown = { y: -1, x: 0 };
const actualMoveDown = tetrisMovement.moveDown(zeroPosition);
tap.same(actualMoveDown, expectedMoveDown);

const expectedMoveLeft = { y: 0, x: -1 };
const actualMoveLeft = tetrisMovement.moveLeft(zeroPosition);
tap.same(actualMoveLeft, expectedMoveLeft);

const expectedMoveRight = { y: 0, x: 1 };
const actualMoveRight = tetrisMovement.moveRight(zeroPosition);
tap.same(actualMoveRight, expectedMoveRight);

const expectedIsInFigure = true;
const actualIsInFigure = tetrisMovement.isInFigure(zeroPosition, oneSlotFigure, zeroPosition);
tap.same(actualIsInFigure, expectedIsInFigure);

const expectedAddFigureToBoard = [[false]];
const actualAddFigureToBoard = tetrisMovement.addFigureToBoard(oneSlotEmptyBoard, zeroPosition, oneSlotFigure);
tap.same(actualAddFigureToBoard, expectedAddFigureToBoard);

const expectedIsFigureOverlappingBoardFilledSlots = true;
const actualIsFigureOverlappingBoardFilledSlots = tetrisMovement.isFigureOverlappingBoardFilledSlots(oneSlotFilledBoard, zeroPosition, oneSlotFigure);
tap.same(actualIsFigureOverlappingBoardFilledSlots, expectedIsFigureOverlappingBoardFilledSlots);

const expectedIsValidFigurePosition = true;
const actualIsValidFigurePosition = tetrisMovement.isValidFigurePosition(oneSlotEmptyBoard, zeroPosition, oneSlotFigure);
tap.same(actualIsValidFigurePosition, expectedIsValidFigurePosition);
