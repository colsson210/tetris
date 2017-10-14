const getColumn = (figure, columnNumber) => figure.map(row => row[columnNumber]);

module.exports = {
  copyFigure(figure) {
    return figure.map(row => row.map(element => element));
  },
  getHeight(figure) {
    return figure.length;
  },
  getWidth(figure) {
    return figure[0].length;
  },
  rotate90DegreesClockwise(figure) {
    const numberOfRowsInFigure = figure.length;
    const numberOfColumnsInFigure = figure[0].length;
    const figureRotated90DegreesClockwise = [];
    for (let columnNumber = 0; columnNumber < numberOfColumnsInFigure; columnNumber++) {
      figureRotated90DegreesClockwise.push(getColumn(figure, columnNumber).reverse());
    }
    return figureRotated90DegreesClockwise;
  },
  rotate90DegreesCounterClockwise(figure) {
    const numberOfColumnsInFigure = figure[0].length;
    const figureRotated90DegreesCounterClockwise = [];
    for (let columnNumber = (numberOfColumnsInFigure - 1); columnNumber >= 0; columnNumber--) {
      figureRotated90DegreesCounterClockwise.push(getColumn(figure, columnNumber));
    }
    return figureRotated90DegreesCounterClockwise;
  },
};
