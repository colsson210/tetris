const child_process = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const tetrisAnimationCreator = require('./tetrisAnimationCreator.js');
const tetrisHistoryWriter = require('./tetrisHistoryWriter.js');

module.exports = {
  writeOutput(history) {
    const tetrisSrcDirectory = __dirname;
    const tetrisDirectory = path.dirname(tetrisSrcDirectory);
    const outputDirectory = `${tetrisDirectory}/tetrisOutput`;
    const historyFilename = `${outputDirectory}/history.txt`;
    const createGIFScriptFilename = `${tetrisSrcDirectory}/createGif.sh`;
    const animationDirectory = `${outputDirectory}/animation`;
    const gifFilename = `${outputDirectory}/animation.gif`;
    return fs.emptyDir(outputDirectory)
    .then(() => tetrisHistoryWriter.writeHistoryToFile(historyFilename, history))
    .then(() => tetrisAnimationCreator.createAnimation(createGIFScriptFilename, animationDirectory, gifFilename, history));
  }
};
