const inquirer = require('inquirer');

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
    if (res.action === 'Complete a sentence') app.completeSentence();
    if (res.action === 'Create a new user') app.createNewUser();
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful();
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent();
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser();
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent();
    if(res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }

    app.startQuestion(closeConnectionCallback);
  })
}

app.completeSentence = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
}

app.createNewUser = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
}

app.searchEventful = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
}

app.matchUserWithEvent = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
}

app.seeEventsOfOneUser = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
}

app.seeUsersOfOneEvent = () => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
}

module.exports = app;


