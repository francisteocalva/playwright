const { test, expect } = require('@playwright/test')
let webcontext


test.beforeAll(async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();
    await expect(page).toHaveTitle("Let's Shop");
    await page.waitForLoadState("networkidle");

    await context.storageState({ path: 'state.json' })
    webcontext = await browser.newContext({ storageState: 'state.json' });
})


test('TC1', async function () {
    const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const alltt = await page.locator(".card-body b").nth(0).textContent();
    console.log(alltt);
})


test('TC2', async function () {

    const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");    //const alltt = await page.locator(".card-body b").allTextContents();
    //console.log(alltt.at(2).toString());
    await page.waitForLoadState('networkidle');
    const parent = page.locator(".card-body");
    const counter = await parent.count();
    // const expected = 'ADIDAS ORIGINAL';
    for (let i = 0; i < counter; i++) {
        const retVal = await parent.locator("b").nth(i).textContent();
        //console.log(retVal + " here?");
        if (retVal === 'IPHONE 13 PRO') {
            await parent.locator('text= Add To Cart').nth(i).click();
            break;
        }

    }
    // await page.pause();

});


test('TC3', async function () {

    const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");    //const alltt = await page.locator(".card-body b").allTextContents();
    //console.log(alltt.at(2).toString());
    await page.waitForLoadState('networkidle');
    const parent = page.locator(".card-body");
    const counter = await parent.count();
    // const expected = 'ADIDAS ORIGINAL';
    for (let i = 0; i < counter; i++) {
        const retVal = await parent.locator("b").nth(i).textContent();
        //console.log(retVal + " here?");
        if (retVal === 'ADIDAS ORIGINAL') {
            await parent.locator('text= Add To Cart').nth(i).click();
            break;
        }

    }

});


test('TC4', async function ({browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();
    

    await page.goto();

    const parentloc = page.locator("");
    await parentloc.selectOption();
})