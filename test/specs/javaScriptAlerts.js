describe("java Script Alerts ", async ()=>{
    it('Handling JavaScript related Alerts With Wdio', async ()=>{
        browser.url("http://only-testing-blog.blogspot.com/")
        
        await $("button[ondblclick='myFunction()']").doubleClick()
        console.log( await browser.getAlertText())
        console.log(await browser.isAlertOpen())
        await browser.acceptAlert()
         expect(await $('#demo').getText()).toHaveText("You pressed OK!")
       
        console.log(await browser.isAlertOpen())

  });
})