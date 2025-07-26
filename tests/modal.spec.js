const{test, expect} = require('@playwright/test')

test('modal', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on('dialog', dialog => dialog.accept());
    //console.log(data)
    await page.locator("#confirmbtn").click();
    
    await page.locator("#mousehover").hover()
    
    const framPage = page.frameLocator("#courses-iframe");
    await framPage.locator("li .new-navbar-highlighter:visible").first().click();
    //await framPage.locator("li a[href*='lifetime-access']:visible").click();
    //const textcheck = framPage.locator().textContent();

   const retVal= await framPage.locator(".text h2").textContent();
    console.log(retVal.split(" ")[1])
    await page.pause();

    
})