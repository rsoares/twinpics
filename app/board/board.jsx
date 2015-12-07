// The game board.

import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  render() {
    return <h1 className='h1'>Board</h1>;
  }
}

ReactDOM.render(
  <Board/>,
  document.getElementById('board')
);
