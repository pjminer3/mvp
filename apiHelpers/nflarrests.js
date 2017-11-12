// ------------------------ NEEDED HELP WITH THIS
const request = require('request');

function generateEndpoint (text) {
    // text = text;
    console.log('THIS IS THE TEXT: ', text);
    return `http://nflArrest.com/api/v1/player/arrests/${text}`;
}


// ------------------------ NEEDED HELP WITH THIS

module.exports.generateEndpoint = generateEndpoint;