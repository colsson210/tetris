const tap = require('tap');
const tetrisStringGenerator = require('./tetrisStringGenerator.js');

const expectedMixedString = '*x.';
const actualMixedString = tetrisStringGenerator.getString([[false, true, false]], { x: 0, y: 0 }, [[true]]);
tap.same(actualMixedString, expectedMixedString);

const actualNoFigure = tetrisStringGenerator.getString([[false]]);
const expectedNoFigure = '.';
tap.same(actualNoFigure, expectedNoFigure);
