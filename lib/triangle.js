const Shape = require('./shape');
const res= require('../index');
const resColor= res.color;
const resText = res.text;
    class Triangle extends Shape {
        constructor(shape) {
            super(shape);

        }


        renderHtml(){
            
             `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 150,0 300,200" fill="${resColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${resText}</text></svg>`;

           
          
            
          
         
            
            
        }
    }
module.exports = Triangle;
    
