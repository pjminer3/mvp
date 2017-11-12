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


// render the page when app receives a get request
// app.get('/', (req, res) => {
//   res.send('We are doing something');
// })



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


  // res.send('Post was successful');
});


// -------------------- NEED TO RESEARCH THE ABOVE
