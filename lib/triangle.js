const Shape = require('./shape');

    class Triangle extends Shape {
        constructor(shape,color,text) {
            super(color,text)
            this.shape= shape;
        }

        render(){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="0,200 150,0 300,200" fill="${this.color}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
          
          </svg>`
        }
    }

    
