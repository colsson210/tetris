const tap = require('tap');
const tetrisFigure = require('./tetrisFigure.js');

const L =[[true, true], [true, false]];

const expectedCopySingle = [[true]];
const actualCopySingle = tetrisFigure.copyFigure([[true]]);
tap.same(actualCopySingle, expectedCopySingle);

const expectedRotated90DegreesClockwiseL = [[true, false], [true, true]];
const actualRotated90DegreesClockwiseL = tetrisFigure.rotate90DegreesClockwise(L);
tap.same(
  actualRotated90DegreesClockwiseL,
  expectedRotated90DegreesClockwiseL,
  'rotate90DegreesClockwise'
);

const expectedRotated90DegreesCounterClockwiseL = [[true, true], [false, true]];
const actualRotated90DegreesCounterClockwiseL = tetrisFigure.rotate90DegreesCounterClockwise(L);
tap.same(
  actualRotated90DegreesCounterClockwiseL,
  expectedRotated90DegreesCounterClockwiseL
);

const expectedHeight = 1;
const actualHeight = tetrisFigure.getHeight([[true]]);
tap.same(actualHeight, expectedHeight);

const expectedWidth = 1;
const actualWidth = tetrisFigure.getWidth([[true]]);
tap.same(actualWidth, expectedWidth);
