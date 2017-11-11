import React from 'react';

class Crime extends React.Component {
  constructor (props) {
    super(props);
  }

  // A class for each individual crime.  Consists of 2 Lines

  render () {
    return (
      <div class="crime">
        <p>{props.Date}  |  {props.Encounter}  |  {props.Category}</p>
        <p>{props.Description}</p>
      </div>
    )
  }
}


export default Crime;