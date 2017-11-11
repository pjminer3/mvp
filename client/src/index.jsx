import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import WatchList from './components/watchList.jsx';



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Search />
        <br/>
        <div id="playerSearch"></div>
        <br/>
        <WatchList />
        
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app')); // will render app