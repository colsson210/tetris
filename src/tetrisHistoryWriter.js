const fs = require('fs-extra');
const tetrisStringGenerator = require('./tetrisStringGenerator.js');

module.exports = {
  writeHistoryToFile(filename, history) {
    const getStringOfState = ({ board, position, figure }) => tetrisStringGenerator.getString(board, position, figure);
    const historyString = history.map(getStringOfState).join('\n\n');
    return fs.outputFile(filename, historyString);
  },
};
