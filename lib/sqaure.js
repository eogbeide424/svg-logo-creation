const Shape = require('./shape');
const res = require('../index');

    class Sqaure extends Shape {
        constructor(shape,color,text) {
            super(shape,color,text);
            this.shape = shape,
            this.color = color,
            this.text = text

        }


        renderHtml(){
        if(res.shape == 'sqaure'){
                return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="200" y="200" width="300" height="200" /> fill="${this.color}" />
          
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
          
          </svg>`
            }
            
        }
    }
    module.exports = Sqaure;