module.exports = {
  getEmptyBoard() {
    return Array.from(
      new Array(this.getDefaultHeight()),
      _ => Array.from(new Array(this.getDefaultWidth()), _ => false));
  },
  getDefaultHeight() {
    return 20;
  },
  getDefaultWidth() {
    return 10;
  },
  getHeight(board) {
    return board.length;
  },
  getWidth(board) {
    return board[0].length;
  },
  getMaxHeight(board) {
    const boardHeight = this.getHeight(board);
    for (let row = boardHeight - 1; row >= 0; row--) {
      if (board[row].includes(true)) {
        return row;
      }
    }
    return 0;
  }
};
