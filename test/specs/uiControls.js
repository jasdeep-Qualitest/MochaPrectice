
const expectChai = require('chai').expect;
describe("Ecommerce Application",()=>
{ it("Ui Control testin", async ()=>
{
    await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

    await $("input[name='username']").setValue("rahulshettyacademy")
    await $("//input[@type='password']").setValue('learning')

    const radioButtonArray= await $$('.customradio');
    const userButton = radioButtonArray[1];
    await userButton.$('.radiotextsty').click();             
   

    const modal=await $(".modal-body")
    
    await modal.waitForDisplayed();   // wait till modal displayed
    
    await $("#cancelBtn").click()
    
   await console.log(await userButton.$('.radiotextsty').isSelected() + " return false")  // check whether the radio button is selected or not
    
    await userButton.$('.radiotextsty').click();
    await modal.waitForDisplayed();
    
    await $("#okayBtn").click()

 

    await radioButtonArray[0].$('.radiotextsty').click()
  
    await  expect(modal).not.toBeDisabled()                                    // check modal is disabled or not

    const dropdown= await $('select.form-control')

    await dropdown.selectByAttribute('value','teach');
    await expectChai(await dropdown.getValue()).to.equal("teach")                         // pick value from static drop down  and check assertion . it is correct or not


    await dropdown.selectByVisibleText('Student')
    await expectChai(await dropdown.getValue(),).to.equal("stud")
    
 
   await $("input[name='terms']").click()
   await $('#signInBtn').click()                          // click on sign in buttton





   await $('*=Checkout').waitForExist();
   await expect(browser).toHaveTitle("ProtoCommerce");        // check page logged in  in or not after sign in button clicked


  

});




});