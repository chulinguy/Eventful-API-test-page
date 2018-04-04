const inquirer = require('inquirer');

const app = {};
app.startQuestion = () => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentece',
      'Create a new user', 
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event'
    ],
    name:'action',
  }).then((res) => {
    if (res.action === 'Complete a sentece') app.completeSentence();
    if (res.action === 'Create a new user') app.createNewUser();
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful();
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent();
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser();
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent();
  })
}

app.completeSentence = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  app.startQuestion();  
}

app.createNewUser = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  app.startQuestion();  
}

app.searchEventful = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  app.startQuestion();  
}

app.matchUserWithEvent = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  app.startQuestion();  
}

app.seeEventsOfOneUser = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  app.startQuestion();  
}

app.seeUsersOfOneEvent = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  app.startQuestion();  
}

module.exports = app;  


