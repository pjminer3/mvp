import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div id="search">
        {/*<div className="team">
          <h3>Search NFL Teams:</h3>
          <input id="teamInput" /> <button id="teamButton" >Submit</button>
        </div>*/}
        <div className="player">
          <h3>Search NFL Players:</h3>
          <div id="inputDiv">
            <input id="playerInput" onChange={(e) => {this.props.handleChange(e)}} /> <button id="playerButton" onClick={(e) => {this.props.onClickSearch(this.props.searchValue)}}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}


export default Search;