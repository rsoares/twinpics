/*
 * Creates action objects based on the available actions.
 */

import {START, STOP, RESET, TILE_FLIP, TILE_FETCH} from './actionTypes';


export default {
  timerStart(data) {
    return {type: START, data};
  },

  timerStop(data) {
    return {type: STOP, data};
  },

  timerReset(data) {
    return {type: RESET, data};
  },

  flipTile(data) {
    return {type: TILE_FLIP, data};
  },

  fetch() {
    return {type: TILE_FETCH, data};
  }
};
