const child_process = require('child_process');
const fs = require('fs-extra');

const tetrisSVGCreator = require('./tetrisSVGCreator.js');

module.exports = {
  createAnimation(createGIFScriptFilename, animationDirectory, gifFilename, history) {
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
        const scriptCall = [createGIFScriptFilename, animationDirectory, gifFilename].join(' ');
        child_process.exec(scriptCall, (error) => {
          if (error) {
            console.log(error);
          }
          resolve();
        });
      });
    });
  },
};
