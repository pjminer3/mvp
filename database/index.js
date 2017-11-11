// ----------------------------------------- LOOKED AT PAST PROJECTS FOR BELOW
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database');
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