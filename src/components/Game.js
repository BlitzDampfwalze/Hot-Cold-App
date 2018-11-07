import React, { Component } from 'react';
import './Game.css';
import GuessSection from './GuessSection';
import StatusSection from './StatusSection';

class Game extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Header />
      <GuessSection />
      <StatusSection />

    );
  }
}

export default Game;
