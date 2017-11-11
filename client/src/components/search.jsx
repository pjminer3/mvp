import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state here
    }
  }

  render () {
    return (
      <div id="search">
        <div className="team">
          <h3>Search NFL Teams:</h3>
          <input id="teamInput"/> <button id="teamButton">Submit</button>
        </div>
        <div className="player">
          <h3>Search NFL Players:</h3>
          <input id="playerInput"/> <button id="playerButton">Submit</button>
        </div>
      </div>
    )
  }
}


export default Search;