const Sqaure = require('../sqaure');


describe("Shape class is a sqaure",()=> {
    it('returns a svg of a sqaure with words',()=> {
         resColor = 'red';
         shape = 'sqaure';
         resText = 'hbd';
        const tri = new Sqaure(resColor,resText);
        expect(tri.renderHtml()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="200" y="200" width="300" height="200" /> fill="${resColor}" /><text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${resText}</text></svg>`)
        
      
       
      
      
    })
})
