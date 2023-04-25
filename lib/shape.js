// const res=require('../index')
class Shape {
    constructor (shape,color,text) {
        this.color = color,
        this.text = text,
        this.shape = shape;
    }
    
    render(){
        if (this.text.length > 2){
             throw new Error("Must include shape then render()method");
            } else {
                this.text = text;
            }

        }
   

}

module.exports = Shape;