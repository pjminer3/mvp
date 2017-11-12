import React from 'react';

  // A class for each individual crime.  Consists of 2 Lines

const Crime = (props) => (
  <div className="crime">
    <h5>{props.crimeDetails.Date}   |   {props.crimeDetails.Encounter}   |   {props.crimeDetails.Category}</h5>
    <p>{props.crimeDetails.Description}</p>
    <p className="outcome">OUTCOME: {props.crimeDetails.Outcome}</p>
  </div>
)


export default Crime;