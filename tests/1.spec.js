const { test, expect } = require('@playwright/test')
const { one } = require('../pageobject/1')
const dataset = JSON.parse(JSON.stringify(require('../utils/placeholder.json')))



test('AC1', async function ({ browser }) {

    const context = await browser.newContext();
    const page = await context.newPage();
    //await page.goto(dataset.url);
    const pageOne = new one(page);
    await pageOne.goto(dataset.url);
    await pageOne.fillup(dataset.username, dataset.password);
    //await page.waitForLoadState('networkidle')
    //await page.pause();
})