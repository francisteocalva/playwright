const {test, expect} = require('@playwright/test')
 


test('familiar', async function ({browser}) {
  
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const click2 = page.locator("[href*='request']");

    const [callAll] = await Promise.all([
   context.waitForEvent('page'), await click2.click()
    ])

    

    const allString = await callAll.locator(".red").textContent();
    const hereString = allString.split('@')[1].split(' ')[0];
    await page.locator("#username").fill(hereString);

    await page.pause();

})





test('final', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const[arr] = await Promise.all([
        context.waitForEvent('page'), await page.locator("[href*='request']").click()

    ])

    const orig = await arr.locator(".im-para.red").textContent();
    const value = orig.split('@')[1].split(' ')[0];

    await page.locator("#username").fill(value);

    await page.pause();

})