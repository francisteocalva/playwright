const {test, expect} = require('@playwright/test')
const {here} = require('../pageobject/Pract')



test('AC', async function ({browser}) { 

    const context = await browser.newContext();
    const page = await context.newPage();
    const calling = new here(page);
    //await page.goto();
    await calling.screen("https://www.google.com/");
    await calling.login('test')
    //calling.login();

    //await page.pause();
    
})