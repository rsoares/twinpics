/*
 * Defines the application's state in response to a given action.
 */

const initialState = {
  timer: 0,
  tiles: []
};

function rootReducer(state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
