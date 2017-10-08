const child_process = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const tetrisAnimationCreator = require('./tetrisAnimationCreator.js');
const tetrisImageGenerator = require('./tetrisImageGenerator.js');
const tetrisHistoryWriter = require('./tetrisHistoryWriter.js');

module.exports = {
  writeOutput(history, keepAnimationImages) {
    const tetrisDirectory = path.resolve('.');
    const outputDirectory = `${tetrisDirectory}/tetrisOutput`;
    const backgroundFilename = `${tetrisDirectory}/backgrounds/tetrisBackground.png`;
    const historyFilename = `${outputDirectory}/history.txt`;
    const scriptFilename = `${tetrisDirectory}/scripts/createGif.sh`;
    const animationDirectory = `${outputDirectory}/animation`;
    const gifFilename = `${outputDirectory}/animation.gif`;
    return fs.emptyDir(outputDirectory)
    .then(() => tetrisHistoryWriter.writeHistoryToFile(historyFilename, history))
    .then(() => tetrisAnimationCreator.createAnimation(scriptFilename, animationDirectory, backgroundFilename, gifFilename, history, keepAnimationImages));
  }
};
