import * as reducerType from '../../unit/reducerType';
import { initMode } from '../../unit/const';

const mode = (state = initMode, action) => {
  switch (action.type) {
    case reducerType.MODE:
      return action.data;
    default:
      return state;
  }
};

export default mode;
