const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');

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
    console.log(`Fullname: ${res.first_name} ${res.last_name}, Age: ${res.age}, Email: ${res.email}`);
    var sql = "INSERT INTO Users (first_name, last_name, age, email) VALUES ('John', 'Doe', '24', 'jdoe@gmail.com')";
    connection.query(sql, function(err, result) {
      if (err) throw err;
      console.log(result);
    });

  }).then(continueCallback);
  //End of your work
}

app.searchEventful = (continueCallback) => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  continueCallback();
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
