const { test, expect } = require('@playwright/test')
const { POManagerFs } = require('../pageobject/POManagerF')
const dataset = JSON.parse(JSON.stringify(require('../utils/placeholder2.json')));


test('TC2', async function ({ browser }) {

    const context = await browser.newContext();
    const page = await context.newPage();
    const poms = new POManagerFs(page);
    const logp = poms.getLogin();
    await logp.goTO(dataset.url);
    await logp.login(dataset.username, dataset.password);
    
    const dashb = poms.getDashboard();
    await dashb.clickButton();

    await page.pause();
    

})