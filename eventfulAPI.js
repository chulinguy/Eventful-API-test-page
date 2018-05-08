const eventfulKey = require("./keys.js").eventful;
const eventful = require('eventful-node');
const client = new eventful.Client(eventfulKey);
const inquirer = require('inquirer');
const app = require('./app');
const connection = require('./connection');

//sample search, try running it to see it in action
// client.searchEvents({
//   keywords: 'tango',
//   location: 'San Francisco',
//   date: "Next Week"
// }, function(err, data){
//    if(err){
//      return console.error(err);
//    }
//    let resultEvents = data.search.events.event;
//    console.log('Received ' + data.search.total_items + ' events');
//    console.log('Event listings: ');
//    for ( let i =0 ; i < resultEvents.length; i++){
//      console.log("===========================================================")
//      console.log('title: ',resultEvents[i].title);
//      console.log('start_time: ',resultEvents[i].start_time);
//      console.log('venue_name: ',resultEvents[i].venue_name);
//      console.log('venue_address: ',resultEvents[i].venue_address);
//    }
// });

function findEvents (optionsObj){
  // YOUR WORK HERE
  client.searchEvents({
    keywords: optionsObj,
  }, function(err, data){
     if(err){
       return console.error(err);
     }
     let resultEvents = data.search.events.event;
     console.log('Received ' + data.search.total_items + ' events');
     console.log('Event listings: ');

     // for ( let i =0 ; i < resultEvents.length; i++){
     //   console.log("===========================================================")
       console.log('title: ',resultEvents[0].title);
     // }
   inquirer.prompt({
     type: 'input',
     name: 'toDatabase',
     message: 'Do you want to send this event to the database (yes/no)?',
   }).then((res) => {
     if(res.toDatabase === 'y' || res.toDatabase === 'Y' || res.toDatabase === 'yes') {
       var post = {title: resultEvents[0].title};
       connection.query("INSERT INTO Events SET ?", post, function(error, results, fields) {
         if (error) throw error;
       });
     } else {
       //if no, go back to step 1 question: what do you want to search

     }
   })
}

//export a custom function that searches via Eventful API, displays the results AND stores some of the data into MySQL
module.exports = findEvents;
