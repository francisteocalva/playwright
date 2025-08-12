const {test, expect} = require('@playwright/test');



test.beforeAll( async function({browser}){
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();
    await expect(page).toHaveTitle("Let's Shop");
    await page.waitForLoadState("networkidle"); //will wait for background process to finish
    await context.storageState({path: 'state.json'})

})