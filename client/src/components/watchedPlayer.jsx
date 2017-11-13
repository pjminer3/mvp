import React from 'react';

const WatchedPlayer = (props) => (
    <div className="watchedPlayer">
        <h5 className="name">{props.watchedplayer.name}</h5>
        <div className="playerDetails">
            <h6>{props.watchedplayer.team}</h6>
            <h6>{props.watchedplayer.position}</h6>
            <h6>Number of Crimes: {props.watchedplayer.crimes.length}</h6>
        </div>

    </div>
)





export default WatchedPlayer;