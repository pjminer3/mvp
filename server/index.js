const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const nflHelpers = require('./../apiHelpers/nflarrests.js');
const request = require('request');
const db = require('./../database/index.js');
const rp = require('request-promise');

const app = express();


// -------------------- NEED TO RESEARCH THE BELOW
let port = 8080;

app.listen(port, () => {
  console.log('Listening on port 8080');
});

app.use(express.static(__dirname + '/../client/dist')); // This is the location of the static file we'll be serving
app.use(bodyParser.json());


// function for adding players to your watchlist
app.post('/watchlist', (req, res) => {
  // req.body.crimes => the array of objects of each crime
  // call db.save(array) so that the player is saved in the database along with all his crimes
  let addedPlayer = db.save(req.body.crimes);
  // the above function returns the player object itself

  // send success status as well as the player we added to the database back to the client
  res.send(201, {player: addedPlayer});
});


// function for, when rendering index homepage, grabs all football players from your watchlist
app.get('/refresh', (req, res) => {
  console.log('We are inside the "/" get request');
  db.Player.find({}, function(err, players) {
    if (err) {
      console.log("There was an error in querying DB");
    } else {
      console.log('The refresh DB query was a success!');
      res.send(200, players);
    }
  });
});



// when doing a player search to grab information
app.post('/', (req, res) => {
  console.log('Post was successful: ', req.body.player);

  let endpoint = nflHelpers.generateEndpoint(req.body.player).trim();
  console.log('Endpoint: ', endpoint);

  rp(endpoint, (err, res, body) => {
    if (err) {
      console.log("There was an error in your request.");
    }

    let records = body;

    // ------------------------ UNCOMMENT THIS TO ADD TO DATABASE -----------------------------
    // save the api records to the database
    // if (records.length > 0) {
    //   console.log('-------------- SAVED RECORDS ----------------');
    //   console.log(records);
    //   // db.save(records);
    // } else {
    //   throw err;
    // }

    // render api arrest records on page
    if (records.length > 0) {
      console.log('-------- THE RECORDS BEING SENT BACK TO CLIENT TO BE RENDERED ---------------');
      return records;
    }
  }).then( records => {
    res.send(JSON.parse(records));
  }).catch ( () => {
    console.log('There was an error with your request');
  })
});


// -------------------- NEED TO RESEARCH THE ABOVE
