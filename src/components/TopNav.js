import React from 'react';
import './topNav.css';

export default function TopNav(props) {
  return(
    <nav>
    <ul className="clearfix">
      <li>
        <a href="#what" className="what" aria-label="How to play">What?</a>
      </li>
      <li>
        <a onClick={() => props.onRestartGame()} href="#feedback" className="new" aria-label="Start a new game">
          + New Game
        </a>
      </li>
      <li>
        <a onClick={() => props.onGenerateAuralUpdate()} href="#get-status"
          /* the `visuallyhidden` class hides an element 
          while leaving it available to screen reader users  */
          className="visuallyhidden focusable status-link">
          Hear state of game
        </a>
      </li>
    </ul>
  </nav>
  );
};