const {test, expect} =require('@playwright/test');
//const {expect} = require();

test('Browser context Playwright', async function({browser}) // adding only will execute this specific test
{

    const context = await browser.newContext(); //fresh browser
    const page = await context.newPage();
    await page.goto('https://www.reddit.com/r/vscode/comments/1dfsizc/how_to_disable_autocompletion_hints/');
    console.log(await page.title() + 'test');

});

test('Page Playwright test', async function({page})
{
    // const context = await browser.newContext(); //fresh browser
    // const page = await context.newPage();
    await page.goto('https://google.com');
    //await page.title
    await expect(page).toHaveTitle('Google'); //assertion

});

test('Login page interact', async function({page})
{
    // const context = await browser.newContext(); //fresh browser
    // const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const title = await page.title();
    expect(title).toContain('LoginPage Practise | Rahul Shetty Academy');
    await page.locator('#username').fill("test"); // id
    await page.locator("[name='password']").fill('Why'); // attribute
    await page.locator('input.btn.btn-info.btn-md').click();// css class
    //await page.locator("[style*='block']").textContent();
    //await expect(page.locator("[style*='block']")).toHaveText('asdsername/password.')
    const retvl = page.locator("[style*='block']");
    await expect(retvl).toHaveText('asdsername/password.');

});






test('error messag validation', async function({page}){
page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username = page.locator("#username");
  //await page.locator("#username").fill('test');
  await username.fill("test");
  await page.locator("[name='password']").fill('test');
  await page.locator("input.btn.btn-info.btn-md").click();
  await expect(page.locator("[style*='block']")).toContainText("ncorrect username/password.");
  //await username.fill("");
  //console.log(await username.innerText() + 'test');

});


test('login success', async function({page}){

    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[name*='pass']").fill("learning");
    await page.locator("input.btn.btn-info.btn-md").click();
    const nextpage = page.locator("h1.my-4");
    const alltitle = page.locator(".card-title a");
    await expect(nextpage).toHaveText("Shop Name");
    console.log(await nextpage.textContent());
    // console.log(await page.locator(".card-title a").first().textContent());
    // console.log(await page.locator(".card-title a").nth(3).textContent());
    const checkall = await alltitle.allTextContents();
    console.log(checkall);


})


test('Signin', async function({page}){

    await page.goto("https://rahulshettyacademy.com/client");
    const regbtn = page.locator("[class='btn1']");
    const firstname = page.locator("#firstName");
    const lastname = page.locator("[formcontrolname='lastName']");
    const emailname = page.locator("[formcontrolname='userEmail']");
    const phone = page.locator("[formcontrolname='userMobile']");
    const pass1 = page.locator("[formcontrolname='userPassword']");
    const pass2 = page.locator("[formcontrolname='confirmPassword']");
    const regbtn2 = page.locator("#login");
    const checkbox = page.locator("[type='checkbox']");


    await regbtn.click();
    await firstname.fill("Francis")
    await lastname.fill("Tst")
    await emailname.fill("vrt@gg2.com")
    await phone.fill("3252342323")
    await pass1.fill("@Karen23")
    await pass2.fill("@Karen23")
    await checkbox.click();
    await regbtn2.click();
})


test('login2', async function({page}) {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();
    await expect(page).toHaveTitle("Let's Shop");
    //await page.waitForLoadState("networkidle"); //will wait for background process to finish
    await page.locator(".card-body b").first().waitFor();//alternative for above will waot for the specific element

    const alltt = await page.locator(".card-body b").allTextContents();
    console.log(alltt.at(2).toString());


})


test('UI Contorls', async function ({page}) {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blink = page.locator("[href*='request']");
    await expect(page).toHaveTitle(/.*LoginPage Practise | Rahul Shetty Academy/); //contains
    //await expect(page).toHaveTitle(/.*WTF/);
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("input.form-control").last().fill("learning");
    
    const drop= page.locator("select.form-control");
    await drop.selectOption("consult");
    await page.locator(".checkmark").last().click();
    await page.locator(".btn.btn-success").click();
    await expect(page.locator(".checkmark").nth(1)).toBeChecked();
    await page.locator("[name='terms']").check();
    await page.locator("[name='terms']").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(blink).toHaveAttribute('class','blinkingText');


    await page.locator("#signInBtn").click();


    await expect(page.locator("h1.my-4")).toHaveText("Shop Name");

})


test('child web', async function ({browser}) {

    
    const context = await browser.newContext(); //fresh browser
    const page = await context.newPage(); // call action
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const doclink = page.locator("[href*='request']");

    const [NewPage] = await Promise.all([
        context.waitForEvent('page'), doclink.click()
    ])

    const getText2 = await NewPage.locator(".im-para.red").textContent();
    const arraT = getText2.split("@");
    const domain = arraT[1].split(" ")[0];
    //console.log(domain);
    const username = page.locator("#username");
    await username.fill(domain);

    console.log(await username.inputValue())

    //await page.pause();


})




test('familiar', async function ({browser}) {

  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  //await page.locator("").fill("");

  //await page.locator("[href*='request']").click();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'), page.locator("[href*='request']").click()
  ])

    const retVal = await newPage.locator('.im-para.red').textContent();
    const newtxt = retVal.split('@');
    const newRetval = newtxt[1].split(' ')[0];

    await page.locator("#username").fill(newRetval);

   // await page.pause();

})





test('newfam', async function ({browser}) {

    const newb = await browser.newContext();
    const page = await newb.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await page.locator("[href*='request']").click();


    const [executeall] = await Promise.all([
      newb.waitForEvent('page') , await page.locator("[href*='request']").click() 
    ])

   const wholeT=  await executeall.locator("[class='im-para red']").textContent();
   const getV = wholeT.split('@')[1].split(' ')[0];
   //const newVal = getV[1].split(' ')[0];

   await page.locator("#username").fill(getV);

   await page.pause();

})


test('final', async function ({browser}) {


    const context = await browser.newContext();
    const page = await context.newPage();
        
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const clicklater = page.locator("[href*='request']");

            const [arrayevent] = await Promise.all([
                context.waitForEvent('page'), await clicklater.click()
            ])
                const getVal = await arrayevent.locator(".im-para.red").textContent();
                const evalVal = getVal.split('@')[1].split(' ')[0];
                await page.locator("#password").fill(evalVal);
                await page.locator("#username").fill(evalVal);
                await expect(page.locator(".text-white.termsText")).toContainText("test");
                await page.pause();
})