const fs = require('fs-extra');
const stringGenerator = require('./stringGenerator.js');

module.exports = {
  writeHistoryToFile(filename, history) {
    const getStringOfState = ({ board, position, figure }) => stringGenerator.getString(board, position, figure);
    const historyString = history.map(getStringOfState).join('\n\n');
    return fs.outputFile(filename, historyString);
  },
};
