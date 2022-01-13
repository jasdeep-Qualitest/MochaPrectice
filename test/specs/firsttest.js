


xdescribe("first test ",()=>{
    it("Login failed Page Title",async ()=>{
        // webdriver io code
    await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
    const abc = await browser.getTitle();
   
    // title validation 
  await  expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

//   picking username and password element
  await $("input[name='username']").setValue("rahulshattyacademy")
  await $("//input[@type='password']").setValue('learning123')
  await $("#signInBtn").click();

  console.log(await $(".alert-danger").getText()+"    out put after wrong password");


//  Wait Mechanisms available in WebDriverIO Framework
  await browser.waitUntil(
    async () => (await $('#signInBtn').getAttribute("value")) === 'Sign In',
    {
        timeout: 5000,
        timeoutMsg: 'expected text not apear'
    }
);


//  get warning msg after wrong passwordNHH                                                                                                                                                                                                                                                                                                                            
 console.log(await $(".alert-danger").getText()+"    out put after wrong password");
  
    });

  // login success full test
    it("Login Successfull",async ()=>{
      await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

      await $("input[name='username']").setValue("rahulshettyacademy")
      await $("//input[@type='password']").setValue('learning')
      await $("#signInBtn").click();

      await $('*=Checkout').waitForExist();
      await expect(browser).toHaveTitle("ProtoCommerce");

    });


    // Assertions of validating Texts on browser with WebDriverIO

    it("Assertions of validating Texts on browser with WebDriverIO",async  ()=>{
      await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
     
await expect(await $("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
     });
    

});