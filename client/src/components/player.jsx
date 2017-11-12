import React from 'react';
import Crime from './crime.jsx';

const Player = (props) => (
  <div>
    <h5>{(props.arrestRecords[0].Name).toUpperCase()}</h5> <button id="addToWatchlist" onClick={props.onClickAddList}>Add to Watchlist</button>
    <h5>{(props.arrestRecords[0].Position_name).toUpperCase()} for {(props.arrestRecords[0].Team_preffered_name).toUpperCase()}</h5>
    {props.arrestRecords.map( (record, index) => <Crime crimeDetails={record} key={index}/>)}
  </div>
)

export default Player;