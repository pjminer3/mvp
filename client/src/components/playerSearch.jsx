import React from 'react';
import Crime from './components/crime.jsx';

class PlayerSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div class="playerProfile">
          <p class="name">{props.searchResults[0].Name}</p>
          <p class="position">{props.searchResults[0].Position_name}</p>
          <p class="team">{props.searchResults[0].Team_preferred_name}</p>
        </div>
        {props.searchResults.map( crime => {
          return <Crime crime={crime} />
        })}
      </div>
    )
  }
}

// Props needs to send over and array 'searchResults' of all crimes

export default PlayerSearch;