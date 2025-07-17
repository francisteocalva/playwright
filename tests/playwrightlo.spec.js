import{test, expect} from '@playwright/test';


test.only('specloc test', async function ({browser}) {

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