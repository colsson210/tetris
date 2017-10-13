const tetris = require('./tetris.js');

module.exports = {
  runTetris(getNextFigure, getMove, maxNumberOfStates) {
    const history = [];
    let state = tetris.getInitialState(getNextFigure, 10, 20);
    while (!state.done && history.length < maxNumberOfStates) {
      history.push(state);
      state = tetris.getNextState(getNextFigure, state.board, state.position, state.figure);
      if (state.isNewFigure) {
        const move = getMove(state.board, state.position, state.figure);
        Object.assign(state, move);
      }
    }
    return history;
  },
};
