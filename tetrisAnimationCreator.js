const child_process = require('child_process');
const fs = require('fs-extra');

const tetrisSVGCreator = require('./tetrisSVGCreator.js');

module.exports = {
  createAnimation(scriptFilename, animationDirectory, backgroundFilename, gifFilename, history, keepAnimationImages) {
    return fs.emptyDir(animationDirectory)
    .then(() => {
      const createImageOfState = ({ board, position: figurePosition, figure }, index) => {
        const imageOfStateFilename = `${animationDirectory}/${index}.svg`;
        const SVGString = tetrisSVGCreator.createSVGString(board, figurePosition, figure, index);
        return fs.outputFile(imageOfStateFilename, SVGString);
      };
      return Promise.all(history.map(createImageOfState));
    })
    .then(() => {
      return new Promise((resolve, reject) => {
        const scriptCall = [scriptFilename, animationDirectory, gifFilename].join(' ');
        child_process.exec(scriptCall, (error) => {
          if (error) {
            console.log(error);
          }
          resolve();
        });
      });
    })
    .then(() => {
      if (!keepAnimationImages) {
        return fs.remove(animationDirectory);
      }
      return Promise.resolve(true);
    });
  },
};
