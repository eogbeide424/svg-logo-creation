const Shape = require('./shape');
const res= require('../index');

    class Circle extends Shape {
        constructor(shape,color,text) {
            super(shape,color,text);
            res.shape = shape,
            res.color = color,
            res.text = text

        }

        renderHtml(){
       {
                return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${res.color}" />
          
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${res.text}</text>
          
          </svg>`
            }
            
        }
    }
    module.exports = Circle;