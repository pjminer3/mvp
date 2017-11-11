// ----------------------------------------- LOOKED AT PAST PROJECTS FOR BELOW
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database'); // <-- this is where I thought I'd find the new database
const Schema = mongoose.Schema; // Reassigns mongoose.Schema => Schema

// ------------------------------------------ LOOKED AT PAST PROJECTS FOR ABOVE

const crime = new Schema({
  date: String, 
  encounter: String, 
  category: String, 
  description: String,
  outcome: String
});

const player = new Schema({
  name: String,
  team: String,
  position: String,
  crimes: [crime]
});


let Crime = mongoose.model('Crime', crime);
let Player = mongoose.model('Player', player);

// player = new Player(name: 'John Doe', team: 'Bears', position: 'Quarterback', crimes: [{date: '2015-01-01', encounter: 'Arrested', category: 'DUI', description: 'He was drunk', outcome: 'Prosecuters dropped case'}, {date: '2015-01-02', encounter: 'Arrested', category: 'DUI', description: 'He was drunk again. Hit a family squirrels but luckily they survived.', outcome: 'Released from the team later that week'}])


const save = (dataArray) => {
  // creates player object assigning name and team name
  let player = {};
  player.name = dataArray[0].Name;
  player.team = dataArray[0].Team_preffered_name;

// creates an object, an array of crimes
  let crimeArray = dataArray.map(crime => {
    let crimeInst = {};
    crimeInst.date = crime.Date;
    crimeInst.encounter = crime.Encounter;
    crimeInst.category = crime.Category;
    crimeInst.description = crime.Description;
    crimeInst.outcome = crime.Outcome;
    return crimeInst;
  });

  player.crimes = crimeArray;
  console.log(player);
  player = new Player(player);
  player.save();
  return player;
}




// // ----------------------------------------- LOOKED AT PAST PROJECTS FOR BELOW
module.exports.save = save;
module.exports.Player = Player;
module.exports.Crime = Crime;

// // ------------------------------------------ LOOKED AT PAST PROJECTS FOR ABOVE
