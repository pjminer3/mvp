import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import WatchList from './components/watchList.jsx';
import PlayerSearch from './components/playerSearch.jsx';
import $ from 'jquery';



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  onClickSearch (name) {
    name = name.split(' ').join('%20');
    console.log(name);
    // NEED TO PRACTICE MAKING AJAX POST REQUESTS!
    $.ajax('http://127.0.0.1:8080/', { method: 'POST', contentType: 'application/json', data: {player: JSON.stringify(name)}});
  }

  // basic index html.  When somebody searches a name, the PlayerSearch component will render in the div w/ id playerSearch
  render() {
    return (
      <div>
        <Search onClickSearch={this.onClickSearch.bind(this)} />
        <br/>
        <div id="playerSearch"></div>
        <br/>
        <WatchList />
        
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app')); // will render app