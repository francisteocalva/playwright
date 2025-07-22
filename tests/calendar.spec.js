const{test,expect} = require ("@playwright/test");


test('calendar', async function ({browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const year = "2028"
    const month = '5'
    const day = '15'
    const datesva = [month, day, year]
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    await page.getByText(year).click();
    await page.locator(".react-calendar__tile.react-calendar__year-view__months__month").nth(Number(month)-1).click();

    await page.locator("//abbr[text()='"+day+"']").click();

    const retVal =  page.locator(".react-date-picker__inputGroup input");

    for(let index = 1; index< await retVal.count(); index++){
        const value = await retVal.nth(index).getAttribute("value");
        expect(value).toEqual(datesva[index-1])
        console.log(value)
    }

    //console.log(retVal)
   //expect(retVal).toEqual("07/21/2025");

   await page.pause();


   
})


test.only("Calendar validations",async({page})=>
{
 
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index <inputs.length; index++)
    {
        const value =inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }
 
 
})

