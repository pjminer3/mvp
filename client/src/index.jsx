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
      crimes: []
    }
  }

  onClickSearch (name) {
    name = name.trim();
    name = name.split(' ').join('%20');
    console.log(name);
    // -------------------- NEEDED HELP FOR THE BELOW - NEED TO PRACTICE MAKING AJAX POST REQUESTS!
    $.ajax({ 
      url: '/',
      method: 'POST', 
      contentType: 'application/json', 
      data: JSON.stringify({"player": name}),
      success: (data) => {
        // console.log('This is the data: ', data);
        this.setState({crimes: data});
        console.log(this.state.crimes);
      },
      error: (err) => {
        if (err) {
          console.log('Error in post');
        }
      }
    });
  }

  // basic index html.  When somebody searches a name, the PlayerSearch component will render in the div w/ id playerSearch
  render() {
    return (
      <div>
        <Search onClickSearch={this.onClickSearch.bind(this)} />
        <br/>
        <WatchList arrestRecord={this.state.crimes} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app')); // will render app