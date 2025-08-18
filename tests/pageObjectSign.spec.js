const {test,expect} = require('@playwright/test')
const {LoginPage} = require('../pageobject/LoginPageF')


test('add cart 5', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = "vrt@gg2.com";
    const password = "@Karen23";
    const logpage = new LoginPage(page);
    await logpage.goTo();
    await logpage.validlogin(username,password);
    
    await page.waitForLoadState('networkidle');

    const parentLoc = page.locator('.card-body');
    const parentC = await parentLoc.count();

    for(let i = 0; i<parentC; i++){
       const reTval= await parentLoc.locator("b").nth(i).textContent();
       if(reTval==='ADIDAS ORIGINAL'){
        await parentLoc.locator("text= Add To Cart").nth(i).click();
        break;
       }
    }

await page.locator("[routerlink*='cart']").click();
await page.locator("li div").last().waitFor();

const vis = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
expect(vis).toBeTruthy();

await page.locator("text=Checkout").click();
await page.locator("input.txt.text-validated").last().pressSequentially("ind");

const newp = page.locator(".ta-results.list-group.ng-star-inserted");
const p= newp.locator("button");
await p.first().waitFor()

console.log(await p.nth(2).textContent());

for(let v=0; v< await p.count(); v++){
    const valueh= await p.nth(v).textContent();
    if(valueh.trim()==="India"){
        await p.nth(v).click();
    }
}
await page.pause();
})
