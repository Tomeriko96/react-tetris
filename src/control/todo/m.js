import actions from '../../actions';

const toggle = (store) => {
  const state = store.getState();
  if (state.get('cur') !== null || state.get('lock')) { // only on the start screen
    return;
  }
  const puzzle = state.get('mode') !== 'puzzle';
  store.dispatch(actions.mode(puzzle ? 'puzzle' : 'game'));
  if (puzzle && state.get('startLines') === 0) {
    store.dispatch(actions.startLines(4));
  }
};

export default {
  toggle,
  down: (store) => toggle(store),
  up: () => {},
};
