const{test,expect} = require('@playwright/test');
const { json } = require('stream/consumers');



test.beforeAll(async function ({browser}) {
    
    const context = await browser.newContext();
    const page  = await context.newPage();

    await page.goto();


    await context.storageState({path: 'state.json'})

})