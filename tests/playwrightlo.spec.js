import{test, expect} from '@playwright/test';


test.only('specloc test', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Student").check();



    //test
    //await page.pause();

})