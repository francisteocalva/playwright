const { When, Then, Given } = require('@cucumber/cucumber')
const { POManagerFs } = require('../../pageobject/POManagerF')
const { test, expect  } = require('@playwright/test')
const playwright = require('playwright');
const data = JSON.parse(JSON.stringify(require('../../utils/placeholder2.json')));
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000); // 60 seconds


Given('Im testing {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.poms = new POManagerFs(page);
    this.logp = this.poms.getLogin();
    await this.logp.goTO(string);
    //await logp.login(data.username, data.password);
});

When('Input {string} and {string}', async function (username, password) {
    // const poms = new POManagerFs(this.page);
    // const logp = poms.getLogin();
    // await logp.login(username, password);
    await this.logp.login(username, password);


});

Then('I should be able to choose {string}', async function (value) {
    // const poms = new POManagerFs(this.page);
    // const dashb = poms.getDashboard();
    // await dashb.clickButton(value);
    this.dashb = this.poms.getDashboard();
    await this.dashb.clickButton(value);
});