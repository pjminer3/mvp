// ----------------------------------------- LOOKED AT PAST PROJECTS FOR BELOW
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/database');
// const Schema = mongoose.Schema; // Reassigns mongoose.Schema => Schema

// ------------------------------------------ LOOKED AT PAST PROJECTS FOR ABOVE

// const crime = new Schema({
//   date: String, 
//   encounter: String, 
//   category: String, 
//   description: String,
//   outcome: String
// });

// const player = new Schema({
//   name: String,
//   team: String,
//   position: String,
//   crimes: [crime]
// });


// let Crime = mongoose.model('Crime', crime);
// let Player = mongoose.model('Player', player);

// player = new Player(name: 'John Doe', team: 'Bears', position: 'Quarterback', crimes: [{date: '2015-01-01', encounter: 'Arrested', category: 'DUI', description: 'He was drunk', outcome: 'Prosecuters dropped case'}, {date: '2015-01-02', encounter: 'Arrested', category: 'DUI', description: 'He was drunk again. Hit a family squirrels but luckily they survived.', outcome: 'Released from the team later that week'}])



var dude = [{
arrest_stats_id: "1",
Date: "2015-08-06",
Team: "SF",
Team_name: "49ers",
Team_preffered_name: "San Francisco 49ers",
Team_city: "San Francisco",
Team_logo_id: "27",
Team_Conference: "NFC",
Team_Division: "West",
Team_Conference_Division: "NFC West",
Team_hex_color: "9B2743",
Team_hex_alt_color: "D1A472",
Name: "Aldon Smith",
Position: "LB",
Position_name: "Linebacker",
Position_type: "D",
Encounter: "Arrested",
Category: "DUI",
Crime_category: "DUI",
Crime_category_color: "1F77B4",
Description: "Accused of hitting a parked vehicle with his vehicle, being under the influence of alcohol and vandalism in Santa Clara, Calif.",
Outcome: "Resolution undetermined. Released by team the next day.",
Season: "2015",
ArrestSeasonState: "OffSeason",
general_category_id: "1",
legal_level_id: "1",
resolution_category_id: "1",
Year: "2015",
Month: "8",
Day: "6",
Day_of_Week: "Thursday",
Day_of_Week_int: "5",
DaysSince: "826",
DaysToLastArrest: "9",
DaysToLastCrimeArrest: "141",
DaysToLastTeamArrest: "154"
},
{
arrest_stats_id: "64",
Date: "2014-04-13",
Team: "SF",
Team_name: "49ers",
Team_preffered_name: "San Francisco 49ers",
Team_city: "San Francisco",
Team_logo_id: "27",
Team_Conference: "NFC",
Team_Division: "West",
Team_Conference_Division: "NFC West",
Team_hex_color: "9B2743",
Team_hex_alt_color: "D1A472",
Name: "Aldon Smith",
Position: "LB",
Position_name: "Linebacker",
Position_type: "D",
Encounter: "Arrested",
Category: "Disorderly conduct",
Crime_category: "Disorderly conduct",
Crime_category_color: "E377C2",
Description: "Accused of making a false bomb threat at Los Angeles airport after being selected for secondary screening.",
Outcome: "Dropped by prosecutors.",
Season: "2014",
ArrestSeasonState: "OffSeason",
general_category_id: "5",
legal_level_id: "1",
resolution_category_id: "2",
Year: "2014",
Month: "4",
Day: "13",
Day_of_Week: "Sunday",
Day_of_Week_int: "1",
DaysSince: "1306",
DaysToLastArrest: "13",
DaysToLastCrimeArrest: "202",
DaysToLastTeamArrest: "16"
}];

// const player = new Schema({
//   name: String,
//   team: String,
//   position: String,
//   crimes: [crime]
// });

const save = (dataArray) => {
  let player = {};
  player.name = crime.Name;
  player.team = crime.Team_preffered_name;

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
  player.save();
  return player;
}




// // ----------------------------------------- LOOKED AT PAST PROJECTS FOR BELOW
module.exports.save = save;
module.exports.Player = Player;
module.exports.Crime = Crime;

// // ------------------------------------------ LOOKED AT PAST PROJECTS FOR ABOVE
