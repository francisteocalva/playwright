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


test.only('without net', async function ({browser}) {

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



test.only('looping', async function ({browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("");
    const parent = page.locator(".card-body");
    for(let i=0; i<await parent.count(); i++){
     const value =await parent.locator(".card-title").nth(i).textContent();
     if(value==="Samsung Note 8"){
        await parent.locator(".btn.btn-info").nth(i).click();

     }

    }
    await page.pause();
})