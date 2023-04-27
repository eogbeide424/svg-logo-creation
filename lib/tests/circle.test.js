const Circle =require('../circle');

describe("Shape class is a circle",()=> {
    it('returns a svg of a circle with words',()=> {
         resColor = 'red';
         resText = 'hbd';
        const tri = new Circle(resColor,resText);
        expect(tri.renderHtml()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${resColor}" /><text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${resText}</text></svg>`)

        
      
       
      
      
    })
})