const fs = require('fs');
const drawing = require('pngjs-draw');
const png = drawing(require('pngjs').PNG);

const movement = require('./movement.js');
const tetrisBoard = require('./tetrisBoard.js');

module.exports = {
  drawTetris(backgroundFilename, outputFilename, board, figurePosition, figure, count) {
    return new Promise((resolve, reject) => {
      fs.createReadStream(backgroundFilename)
      .pipe(new png({ filterType: 4 }))
      .on('parsed', function() {
        const cellSideLength = 20;
        const cellOffset = 5;
        const cellFilledSideLength = cellSideLength - cellOffset;
        const offset = 50;
        const boardHeight = tetrisBoard.getHeight(board);
        const boardWidth = tetrisBoard.getWidth(board);
        const maxY = offset + cellSideLength * boardHeight;
        const maxX = offset + cellSideLength * boardWidth;
        this.drawText(maxX + offset, offset, `${count}`, this.colors.black(100));
        for (let row = 0; row < boardHeight; row++) {
          for (let column = 0; column < boardWidth; column++) {
            const color = (figure && movement.isInFigure(figurePosition, figure, row, column))
            ? this.colors.red(100)
            : (board[row][column] ? this.colors.black(100) : this.colors.white(100));
            this.fillRect(
              offset + cellOffset + column * cellSideLength,
              maxY - (offset + cellOffset + row * cellSideLength),
              cellFilledSideLength,
              cellFilledSideLength,
              color
            );
          }
        }
        this.pack().pipe(fs.createWriteStream(outputFilename))
        .on('finish', () => {
          resolve();
        });
      });
    });
  }
};
