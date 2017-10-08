const strategy = require('./strategy.js');
const tetrisFigures = require('./tetrisFigures.js');
const tetrisRunner = require('./tetrisRunner.js');
const tetrisRunnerOutputWriter = require('./tetrisRunnerOutputWriter.js');

const maxNumberOfStates = 200;
const getNextFigure = (() => {
  const allFigures = Object.keys(tetrisFigures).map(tetrisFigureName => tetrisFigures[tetrisFigureName]);
  let i = 0;
  return () => {
    const figure = allFigures[i];
    i = (i + 1) % allFigures.length;
    return figure;
  };
})();
const history = tetrisRunner.runTetris(getNextFigure, strategy.getMove, maxNumberOfStates);
const keepAnimationImages = false;
tetrisRunnerOutputWriter.writeOutput(history, keepAnimationImages);
