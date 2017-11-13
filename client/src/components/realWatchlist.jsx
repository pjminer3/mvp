import React from 'react';
import WatchedPlayer from './watchedPlayer.jsx';

class RealWatchlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div id="realWatchlist">
        <div className="player">
          <h3>Players on your Watchlist:</h3>
          {this.props.watchlist.length == 0 ? <h5>Add Players to Watchlist</h5> : this.props.watchlist.map( (watchedPlayer, index) => {
              return <WatchedPlayer watchedplayer={watchedPlayer} key={index} />
          })}
        </div>
      </div>
    )
  }
}









export default RealWatchlist;   