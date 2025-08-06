const{test, expect} = require('@playwright/test')



test.only('Screenshot', async function ({browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#show-textbox").isVisible();
    await page.screenshot({path: 'whole.png'});
    await page.locator("#show-textbox").click();
    await page.locator(".inputs.displayed-class").screenshot({path: 'here.png'})

    expect(await page.screenshot()).toMatchSnapshot('first.png')
    
})