import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import WatchList from './components/watchList.jsx';
import PlayerSearch from './components/playerSearch.jsx';



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  onClickSearch (event) {
    console.log(event);
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