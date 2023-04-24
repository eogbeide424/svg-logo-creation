const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([{
    type: 'input',
    message: 'Enter log initials',
    name: 'logoLetters',
},
{
    type: 'input',
    message: 'Enter background color',
    name: 'logoColor',
},
{
    type: 'list',
    message: 'Enter shape of logo',
    name: 'logoShape',
    choice:['circle','triangle','square'],
},

])