import React from 'react';

  // A class for each individual crime.  Consists of 2 Lines

const Crime = (props) => (
  <div class="crime">
    <h5>{props.crime.Date}  |  {props.crime.Encounter}  |  {props.crime.Category}</h5>
    <p>{props.crime.Description}</p>
  </div>
)


export default Crime;