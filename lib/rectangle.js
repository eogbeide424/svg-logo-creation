const Shape = require('./shape');

    class Rect extends Shape {
        constructor(shape,color,text) {
            super(color,text)
            this.shape= shape;
        }

        renderHtml(){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="0" y="0" width="300" height="200" /> fill="${this.color}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
          
          </svg>`
        }
    }
    module.exports = Rect;