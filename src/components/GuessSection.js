import React from 'react';
import Feedback from './Feedback';
import GuessForm from './GuessForm';

export default function GuessSection(props) {
  return(
    <section>
      <Feedback />
      <GuessForm />
    </section>
  )
}