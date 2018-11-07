import React from 'react';
import Feedback from './Feedback';
import GuessForm from './GuessForm';

export default function GuessSection(props) {
  return(
<section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={props.feedback} guessCount={props.guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  )
}