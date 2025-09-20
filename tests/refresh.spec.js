const {test} = require('@playwright/test');
const{pomRefresh} = require('../pageobject/pomRefresh')
const dataset = JSON.parse(JSON.stringify(require('../utils/placeholder.json')))

test('POM testing', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();
    //await page.goto("here");

    const poms = new pomRefresh(page)
    await poms.getLogin(dataset.url, dataset.username, dataset.password);
    //await page.pause();
    
})