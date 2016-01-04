// This module represents a tile in the game.
import React from 'react';
// Styles
import './tile.scss';

class Tile extends React.Component {
  render() {
    return (
      <img src={'https://placehold.it/120x120'} className='tile inline-block left'/>
    );
  }
}

export default Tile;
