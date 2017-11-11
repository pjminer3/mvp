const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();


// -------------------- NEED TO RESEARCH THE BELOW
let port = 8080;

app.listen(port, () => {
  console.log('Listening on port 8080');
});

app.use(express.static(__dirname + '/../client/dist')); // Why does adding the file name ruin it?

// -------------------- NEED TO RESEARCH THE ABOVE

// app.listen(8080, () => {
//   console.log('Example app listening on port 8080');
// });

app.post('/', (req, res) => {
  res.send('Post was successful')
})