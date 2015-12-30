// The timer. Faster, faster!
import React from 'react';

class Timer extends React.Component {
  render() {
    return (
      <div className='center'>
        <p className='h3'>00:00:00</p>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default Timer;
