const Triangle = require('../triangle');



describe("Shape class is a triangle",()=> {
    it('returns a svg of a triangle with words',()=> {
         resColor = 'red';
         shape = 'triangle';
         resText = 'hbd';
        const tri = new Triangle(resColor,resText);
        expect(tri.renderHtml()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 150,0 300,200" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">hbd</text></svg>')

        
      
       
      
      
    })
})