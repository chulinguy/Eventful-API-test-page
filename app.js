const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');
//find event
const eventfulKey = require("./keys.js").eventful;
const eventful = require('eventful-node');
const client = new eventful.Client(eventfulKey);
const findEvents = require('./eventfulAPI.js');

const app = {};

app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);

    if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }
  })
}

app.completeSentence = (continueCallback) => {
 //YOUR WORK HERE
 inquirer.prompt([{
   type: 'input',
   name: 'fav_color',
   message: 'What is your favorite color?'
 },{
   type: 'input',
   name: 'item',
   message: 'What is an item in your favorite color?'
 }]).then((res) => {
   console.log(`My favorite color is ${res.fav_color} so my dream is to buy a ${res.fav_color} ${res.item}`);
 }).then(continueCallback);
 //End of your work
}

app.createNewUser = (continueCallback) => {
  //YOUR WORK HERE
  inquirer.prompt([{
    type: 'input',
    name: 'first_name',
    message: 'What is your first name?'
  },{
    type: 'input',
    name: 'last_name',
    message: 'What is your last name?'
  },{
    type: 'input',
    name: 'age',
    message: 'How old are you?'
  },{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }]).then((res) => {
    //res gives us an obj with the "name" as the key and the value = user's input
    console.log(`Fullname: ${res.first_name} ${res.last_name}, Age: ${res.age}, Email: ${res.email}`);

    var post = {first_name: res.first_name, last_name: res.last_name, age: res.age, email: res.email};

    connection.query("INSERT INTO Users SET ?", post, function(error, results, fields) {
      if (error) throw error;
    });

  }).then(continueCallback);
  //End of your work
}

app.searchEventful = (continueCallback) => {
  // ask user what event to search for
  inquirer.prompt({
    type: 'input',
    name: 'event',
    message: 'What event do you want to search for?'
  }).then((res) => {

    findEvents(res.event, (eventList) => {
      inquirer.prompt({
    type: 'input',
    name: 'toDatabase',
    message: 'Do you want to send this event to the database (yes/no)?',
  }).then((res) => {
    if(res.toDatabase === 'y' || res.toDatabase === 'Y' || res.toDatabase === 'yes') {
      var post = eventList;
      connection.query("INSERT INTO eventtable SET ?", post, function(error, results, fields) {
        if (error) throw error;
      });
    }
      //if no, go back to step 1 question: what do you want to search
      continueCallback();

  })
    });
  })
  //End of your work
}


app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

module.exports = app;
