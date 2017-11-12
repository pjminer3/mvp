import React from 'react';
import Crime from './crime.jsx';

const Player = (props) => (
  <div>
    <h5>Patrick Miner</h5>
    <h5>Linebacker</h5>
    {props.arrestRecords.map( record => <Crime crimeDetails={record}/>)}
  </div>
)