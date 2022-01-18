describe('handle multiple windows with WebDriver IO', async ()=>{
    it ('test multiple windows switch', async ()=>{
         browser.url('https://www.rahulshettyacademy.com/AutomationPractice/')
         await $("button[id='openwindow']").click()
         var handles=await browser.getWindowHandles()
         await browser.switchToWindow(handles[1])
         console.log(await browser.getTitle() + "         second win title")
         await browser.switchToWindow(handles[0])
         console.log(await browser.getTitle() + "         first win title")

         
    });



    it('Frame switch',async ()=>{
        browser.url('https://www.rahulshettyacademy.com/AutomationPractice/')
        
        
        await $("#mousehover").scrollIntoView()     
        console.log(await $$('a').length) 

       await browser.switchToFrame(await $("//iframe[@id='courses-iframe']"))        //switch to frame
        console.log(await $$('a').length)
    })
});