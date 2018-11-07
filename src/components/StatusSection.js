import React from 'react';
import GuessList from './GuessList';
import GuessCount from './GuessCount';
import AuralStatus from './AuralStatus';

export default function StatusSection(props){
  return(
    <section>
      <GuessCount />
      <GuessList />
      <AuralStatus />
    </section>
  );
};