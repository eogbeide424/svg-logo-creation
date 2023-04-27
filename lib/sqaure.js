const Shape = require('./shape');


    class Sqaure extends Shape {
        constructor(color,text) {
            super(color);
            this.text = text;
            

        }


        renderHtml(){
     
                return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="200" y="200" width="300" height="200" /> fill="${this.color}" /><text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`
            }
            
        }
    
    module.exports = Sqaure;