const expectChai= require('chai').expect

describe("How to Apply Sort the Web tables using WebDriverIO",async ()=>{
it("table sorting",async ()=>{
      browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
      await $("tr th:nth-child(1)").click();
     await browser.pause(3000)
      const VegArray= await $$('tr td:nth-child(1)') // picking elements from html table
      const farray=[];
      for(var i=0;i<VegArray.length;i++)
      {
          
          farray[i]=await VegArray[i].getText()                     // get text from html elements
       }
    //  const farray =  VegArray.map((item) => item.getText()) 

      copyfarray=farray.slice()
       console.log("sorted array")
       console.log( farray)
      


      const sortedVegarray = copyfarray.sort(); 
              // sorting the elements
      // console.log(await JSON.stringify(farray)===JSON.stringify(sortedVegarray))
    //   await expect( sortedVegarray).not.toEqual(farray)      //comparing two arrays assertion
    //   await expectChai(farray).to.equal(sortedVegarray)
     expect(sortedVegarray).toEqual(farray)

});
it("Table filteration",async ()=>{
 await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
  await $("input[type='search']").setValue('tomato')
  const vegnameArray= await $$('tr td:nth-child(1)')
  expect(vegnameArray).toBeElementsArrayOfSize({eq:1})
  expect(await vegnameArray[0]).toHaveTextContaining('tomato')

  
})
});