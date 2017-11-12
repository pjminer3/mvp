import React from 'react';
import Player from './player.jsx';

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    console.log('WE ARE IN HERE: WatchList');
    return (
      <div id="watchList">
        <h4>MY WATCHLIST:</h4>
        <Player arrestRecords={this.props.arrestRecord} />
      </div>
    )
  }
}




export default WatchList;