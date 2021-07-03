import React from 'react';
import './Countdown.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increment();
  }

  increment() {
    setTimeout(() => {
      this.setState({counter: this.state.counter + 1});
      this.increment();
    }, 1000);
  }

  render() {
    const igfDate = new Date("Feb 1, 2022 00:00:00").getTime();
    let today = new Date().getTime();
    let distance = igfDate - today;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let dateString = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    return (
      <div className="Countdown">
        <h1>Countdown to IGF:</h1>
        <h1>{dateString}</h1>
        <h2>Categories:</h2>
        <ul>
          <li><strong>Best Overall</strong></li>
          <li><strong>Best in Visual Art</strong></li>
          <li><strong>Best in Audio</strong></li>
          <li><strong>Best in Design</strong></li>
          <li><strong>Best in Narrative</strong></li>
          <li><strong>Experimental</strong></li>
        </ul>
        <h2>Make a good game!</h2>
      </div>
    );
  }
}

export default Countdown;
