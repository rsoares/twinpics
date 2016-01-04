// The game board.

import React from 'react';
import Tile from '../tile/tile';
// Styles
import './board.scss';

class Board extends React.Component {
  render() {
    let tiles = Array( 16 ).fill( 1 );

    return (
      <div>
        <ul className='list-reset clearfix'>
          {tiles.map( (v, index) => {
            return <li key={index} className='inline-block'><Tile /></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Board;
