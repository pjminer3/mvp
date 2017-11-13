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
      crimes: [],
      watchlist: [],
      searchValue: ''
    }
  }

  // run initial get requests to get data from the database
  // the below should be triggered right away
  componentDidMount() {
    $.ajax({
      url: '/',
      method: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log('Loading GET request was a success: ', data);
      },
      error: (data) => {
        console.log('There was an error: ', data);
      }
    })
  }

  // resets the searchValue everytime a key is pressed in the search bar, so we have constant control over it
  handleChange (event) {
    this.setState({searchValue: event.target.value})
  }

  // function for adding users and user data to our watchlist (database)
  onClickAddList (/*takes data from this.state.crimes*/) {
    console.log('-- LETS TRY TO POST TO A NEW ROUTE --');
    $.ajax({
      url: '/watchlist',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(this.state), // will send to the server "{crimes: [**data**]}"
      success: (data) => {
        console.log("We posted to /watchlist  correctly: ", data);
        // change state of watchlist by adding new db object to it
        let newWatchlist = this.state.watchlist
        newWatchlist.push(data.player);
        this.setState({watchlist: newWatchlist});
        
        // change state of crimes so we're back to a clean slate in the search
        this.setState({crimes: []});
        console.log('this is the new watchlist: ', this.state.watchlist);
      },
      error: (err) => {
        console.log('There was an error with this post request');
      }
    })
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
        this.setState({searchValue: ''}); // <--------------------- WHY WON'T THIS WORK? Need to change the value of the input to nothing
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
        <Search onClickSearch={this.onClickSearch.bind(this)} searchValue={this.state.searchValue} handleChange={this.handleChange.bind(this)} />
        <br/>
        <WatchList arrestRecord={this.state.crimes} onClickAddList={this.onClickAddList.bind(this)} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app')); // will render app