const inquirer = require('inquirer');
const triangle = require('./lib/triangle');
const sqaure = require('./lib/sqaure');
const fs = require('fs');
const circle = require('./lib/circle');
let page;

function run() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'Enter log initials',
            name: 'logoLetters',
        },
        {
            type: 'input',
            message: 'Enter background color',
            name: 'color',
        },
        {
            type: 'checkbox',
            message: 'Enter shape of logo',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },

        ]).then((res) => {
            if (res.shape == 'triangle') {
                const newTriangle = new triangle(res.color, res.logoLetters);
                // page =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 150,0 300,200" fill="${resColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${resText}</text></svg>`;
                generatePage(newTriangle.renderHtml());

            } else if (res.shape == 'sqaure') {
                const newSqaure = new sqaure(res.color, res.logoLetters);
                generatePage(newSqaure.renderHtml());


            }

            else {
                const newCircle = new circle(res.color, res.logoLetters);
                generatePage(newCircle.renderHtml());

            }
        })
}

const generatePage = (page) => {
    fs.promises.writeFile('image.svg', page).then(() => {
        console.log('file created')
    }).catch((err) => {
        console.log(err)
    })
}

run();

