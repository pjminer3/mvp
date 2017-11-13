import React from 'react';
import Player from './player.jsx';

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div id="watchList">
        <h3>Search Results:</h3>
        {this.props.arrestRecord.length == 0 ? <h3 className="addPlayer">Add Player to Watchlist</h3> : <Player arrestRecords={this.props.arrestRecord} onClickAddList={this.props.onClickAddList} />}
      </div>
    )
  }
}




export default WatchList;