const inquirer = require('inquirer');
const triangle = require('./lib/triangle');
const sqaure = require('./lib/sqaure');
const fs = require('fs');
const circle = require('./lib/circle');
let page;

function run(){
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
    choices:['circle','triangle','square'],
},

]).then((res)=> {
    if(res.shape == 'triangle'){
        new triangle(this.color,this.text,this.shape);
        return page =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 150,0 300,200" fill="${resColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${resText}</text></svg>`;
       
    } else if(res.shape == 'sqaure'){
        new sqaure(res.shape,res.color,res.text);
        if(res.shape == 'sqaure'){
            return page = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="200" y="200" width="300" height="200" /> fill="${res.color}" />
      
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${res.text}</text>
      
      </svg>`
        }
    } 
    
    else{
        new circle(res.shape,res.color,res.text);
                return page= `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${res.color}" />
  
    <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${res.text}</text>
  
  </svg>`;}
    })
}



const generatePage = (response,page)=>{
    return fs.writeFile(join(__dirname, '..', 'examples', 'img.svg'),generatePage(response,page))
}

run();

