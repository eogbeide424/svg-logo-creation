class Shape {
    constructor (color,text) {
        this.color = color,
        this.text = text;
    }
    render(){
        if (text.length > 2){
             throw new Error("Must include shape then render()method");
            } else {
                this.text = text;
            }

        }
   

}

module.exports = Shape;