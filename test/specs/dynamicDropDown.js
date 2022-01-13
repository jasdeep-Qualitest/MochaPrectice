xdescribe('Automation Testing', async ()=>{
    it('Dynamic Drop Down Testing' ,async ()=>{

        await browser.url('https://www.rahulshettyacademy.com/AutomationPractice/')


        await $('#autocomplete').setValue('ind');
       let items=await $$('[class="ui-menu-item"] div')
        
       for (var i=0;i<items.length;i++)
       {
            if(await items[i].getText()==="India")
            {
              await items[i].click()
            }

               

       }

        
     

    });

    it('Select check box Test',async ()=>{
      const checkbox1=await $$("input[type='checkbox']")
      await checkbox1[1].click()
      await checkbox1[1].isSelected()
          })


    it('Mouse Hover Test', async ()=>{

     await $("#mousehover").scrollIntoView()

          
     await $("#mousehover").moveTo()
    

     await $('=Top').click()
    



    })

    
});