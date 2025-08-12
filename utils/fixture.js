const { test } = require('@playwright/test');
const { loginpage } = require('../pageobject/LoginPageF')
const dateset = JSON.parse(JSON.stringify(require('../utils/placeholder.json')))

const testing = test.extend({

    logginpage: async function ({ browser }, use) {
        const context = await browser.newContext();
        const page = await context.newPage();
        const logp = new loginpage(page)
        await logp.goTO(dateset.url);
        await logp.login(dateset.username, dateset.password);
        await use(page)
    }
})

export { testing };