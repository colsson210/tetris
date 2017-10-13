const tap = require('tap');
const tetrisBoard = require('./tetrisBoard.js');

const boardMaxHeight1 = [[true]];
const emptyBoard = tetrisBoard.getEmptyBoard(1, 1);

const expectedEmptyBoard = [[false]];
tap.same(emptyBoard, expectedEmptyBoard);

const expectedWidth = 1;
tap.same(tetrisBoard.getWidth(emptyBoard), expectedWidth);

const expectedHeight = 1;
tap.same(tetrisBoard.getHeight(emptyBoard), expectedHeight);

const expectedDefaultWidth = 10;
tap.same(tetrisBoard.getDefaultWidth(), expectedDefaultWidth);

const expectedDefaultHeight = 20;
tap.same(tetrisBoard.getDefaultHeight(), expectedDefaultHeight);

const expectedEmptyBoardMaxHeight = 0;
tap.same(tetrisBoard.getMaxHeight(emptyBoard), expectedEmptyBoardMaxHeight);

const expectedBoardMaxHeight1MaxHeight = 1;
tap.same(tetrisBoard.getMaxHeight(boardMaxHeight1), 1);
