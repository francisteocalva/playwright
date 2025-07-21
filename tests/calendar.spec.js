const{test,expect} = require ("@playwright/test");


test.only('calendar', async function ({browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const year = "2028"
    const month = '5'
    const day = '15'

    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    await page.getByText(year).click();
    await page.locator(".react-calendar__tile.react-calendar__year-view__months__month").nth(Number(month)-1).click();

    await page.locator("//abbr[text()='"+day+"']").click();

    const retVal = await page.locator(".react-date-picker__inputGroup").textContent();
    console.log(retVal)
    expect(retVal).toEqual("07/21/2025");

    await page.pause();

})