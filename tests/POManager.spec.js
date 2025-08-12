const { test, expect } = require('@playwright/test')
const { POManagerFs } = require('../pageobject/POManagerF')
const dataset = JSON.parse(JSON.stringify(require('../utils/placeholder2.json')));

for(const data of dataset){
test(`TC2 ${data.product}`, async function ({ browser }) {

    const context = await browser.newContext();
    const page = await context.newPage();
    const poms = new POManagerFs(page);
    const logp = poms.getLogin();
    await logp.goTO(data.url);
    await logp.login(data.username, data.password);
    
    const dashb = poms.getDashboard();
    await dashb.clickButton(data.product);

    //await page.pause();
    

})}