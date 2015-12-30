import './global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board/board.jsx';
import Timer from './timer/timer.jsx';

ReactDOM.render(
  <Timer/>,
  document.getElementById('timer')
);
ReactDOM.render(
  <Board/>,
  document.getElementById('board')
);
