import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // use the below to change the state with every single key press, so that I can search the state when I need to!
  handleChange (event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div id="search">
        <div className="team">
          <h3>Search NFL Teams:</h3>
          <input id="teamInput" /> <button id="teamButton" >Submit</button>
        </div>
        <div className="player">
          <h3>Search NFL Players:</h3>
          <input id="playerInput" onChange={this.handleChange} /> <button id="playerButton" onClick={(e) => {this.props.onClickSearch(this.state.value)}}>Submit</button>
        </div>
      </div>
    )
  }
}


export default Search;