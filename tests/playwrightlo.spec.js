import{test, expect} from '@playwright/test';


test('specloc test', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Student").check();
    //placeholder
    await page.getByPlaceholder("Password").fill("test");
    //role submit button
    await page.getByRole("button", {name:'Submit'}).click();
    //message getbytext
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    //role link
    await page.getByRole("link",{name: 'Shop'}).click();
    //chain name
    await page.locator("app-card").filter({hasText:'Samsung Note 8'}).getByRole("button").click();


    //test
    //await page.pause();

})


test('promise', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const [arr] = await Promise.all([
        context.waitForEvent("page"), await page.getByText("Free Access to InterviewQues/ResumeAssistance/Material").click()
    ]);


    //await arr.pause();

    const textval = await arr.locator(".im-para.red").textContent();
    const lim = textval.split("@")[1].split(" ")[0];

    await page.locator(".form-control").first().pressSequentially(lim);

    await page.pause();

    
})


test('without net', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("site");
    const [arra] = await Promise.all([
        await context.waitForEvent('page'), await page.locator("").click()
    ])
    
    const value = await arra.locator("").textContent();
    const cutt = value.split("@")[1].split(" ")[0];
    
    await page.locator("").pressSequentially(cutt);

})



test('looping', async function ({browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/angularpractice/shop");
    const parent = page.locator(".col-lg-3");
    for(let i=0; i<await parent.count(); i++){
     const value =await parent.locator(".card-title").nth(i).textContent();
     //console.log(value);
     if(value.trim()==="Samsung Note 8"){
        //await parent.locator("text='Add '").nth(i).click();
        await parent.getByRole("button",{name: 'Add'}).nth(i).click();
        //await parent.locator("[class='btn btn-info']").nth(i).click();
        await parent.locator().setInputFiles();
        break;

     }

    }
    await page.pause();
    //here
})



test('hosp', async function ({browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto();
    const parentlo = page.locator("");

    for(let i=0; i< await parentlo.count(); i++){
        const getText = await parentlo.locator("").nth(i).textContent();
        if(getText.trim()==="test")
            {
                await parentlo.locator("").nth(i).click();
        }
    }
    
})


test('string', async function ({browser}) {


    const mystring = 'DaD'
    //console.log(mystring.length)
    let retVal = ""
    for(let i=0; i< mystring.length; i++){
        retVal = mystring.charAt(i)+retVal;    
    }
    console.log(retVal+'here');

    
})