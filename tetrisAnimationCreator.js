const child_process = require('child_process');
const fs = require('fs-extra');

const tetrisImageGenerator = require('./tetrisImageGenerator.js');

module.exports = {
  createAnimation(scriptFilename, animationDirectory, backgroundFilename, gifFilename, history, keepAnimationImages) {
    return fs.emptyDir(animationDirectory)
    .then(() => {
      const createImageOfState = ({ board, position, figure }, index) => {
        const imageOfStateFilename = `${animationDirectory}/${index}.png`;
        return tetrisImageGenerator.drawTetris(backgroundFilename, imageOfStateFilename, board, position, figure, index);
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
