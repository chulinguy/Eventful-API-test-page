const key = require("./keys.js").eventful;
const eventful = require('eventful-node');
const client = new eventful.Client(key);

client.searchEvents({ 
  keywords: 'tango',
  location: 'San Francisco',
  date: "2018040300-2018040400"
}, function(err, data){
  
   if(err){
   
     return console.error(err);
   
   }
   let resultEvents = data.search.events.event;
   console.log('Recieved ' + data.search.total_items + ' events');
   console.log('Event listings: ');
   for ( let i =0 ; i < resultEvents.length; i++){
     console.log(resultEvents[i]);
     console.log("===========================================================")
   }
 });