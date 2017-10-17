const tetrisMovement = require('./tetrisMovement.js');
const tetrisBoard = require('./tetrisBoard.js');

module.exports = {
  createSVGString(board, figurePosition, figure, count) {
    const fillSVGTemplate = (body) => {
      return `<?xml version="1.0" encoding="UTF-8" ?>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        ${body};
      </svg>
      `;
    };
    const backgroundColor = 'white';
    const figureColor = 'red';
    const blockColor = 'black';
    const cellSideLength = 20;
    const cellStrokeWidth = parseInt(0.1 * cellSideLength, 10);
    const offset = cellSideLength * 2;

    const createSVGRect = ({ x, y, width, height, color, strokeWidth }) => (
      `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${color}" stroke-width="${strokeWidth}" stroke="pink" stroke-opacity="1.0"/>`
    );
    const boardHeight = tetrisBoard.getHeight(board);
    const boardWidth = tetrisBoard.getWidth(board);
    const maxY = offset + cellSideLength * boardHeight;
    const maxX = offset + cellSideLength * boardWidth;
    const backgroundRectHeight = (2 * offset) + (cellSideLength * boardHeight);
    const backgroundRectWidth = (2 * offset) + (cellSideLength * boardWidth);
    const backgroundRect = createSVGRect({
      x: 0,
      y: 0,
      width: backgroundRectWidth,
      height: backgroundRectHeight,
      color: backgroundColor,
      strokeWidth: 0,
    });
    const rects = [];
    rects.push(backgroundRect);
    for (let row = 0; row < boardHeight; row++) {
      for (let column = 0; column < boardWidth; column++) {
        const cellIsInFigure = (figure
          && tetrisMovement.isInFigure(figurePosition, figure, row, column));
        const color = cellIsInFigure
          ? figureColor
          : (board[row][column] ? blockColor : backgroundColor);
        const x = offset + column * cellSideLength;
        const y = maxY - (row * cellSideLength);
        rects.push(createSVGRect({
          x,
          y,
          color,
          height: cellSideLength,
          strokeWidth: cellStrokeWidth,
          width: cellSideLength,
        }));
      }
    }
    return fillSVGTemplate(rects.join('\n'));
  },
};
