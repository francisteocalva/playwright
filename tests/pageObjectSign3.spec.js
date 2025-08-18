const { test, expect } = require('@playwright/test');
const { pomanager } = require('../pageobject/POManagerF')
const dateset = JSON.parse(JSON.stringify(require('../utils/placeholder.json')));

test('TC2', async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new pomanager(page);

    const logp = poManager.getLoginPage() //loginpage3(page);
    await logp.url();
    await logp.login(dateset.username, dateset.password);

    const dash = poManager.getDashboard()//dashboard(page);
    //const searchV = 'ADIDAS ORIGINAL'
    await dash.search(dateset.search);

    await page.locator("[routerlink*='cart']").click();
    await page.locator("li div").last().waitFor();

    const vis = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(vis).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("input.txt.text-validated").last().pressSequentially("ind");

    const newp = page.locator(".ta-results.list-group.ng-star-inserted");
    const p = newp.locator("button");
    await p.first().waitFor()

    console.log(await p.nth(2).textContent());

    for (let v = 0; v < await p.count(); v++) {
        const valueh = await p.nth(v).textContent();
        if (valueh.trim() === "India") {
            await p.nth(v).click();
        }
    }
    //await page.pause();
})
