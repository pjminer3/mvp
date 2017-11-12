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
        <h4>MY WATCHLIST:</h4>
        {this.props.arrestRecord.length == 0 ? <h5>Add Player to Watchlist</h5> : <Player arrestRecords={this.props.arrestRecord} onClickAddList={this.props.onClickAddList} />}
      </div>
    )
  }
}




export default WatchList;