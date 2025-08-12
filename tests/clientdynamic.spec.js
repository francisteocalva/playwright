const {test, expect} = require('@playwright/test');


test('Add to cart', async function ({browser}) {
   
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();
    await expect(page).toHaveTitle("Let's Shop");
    //await page.waitForLoadState("networkidle"); //will wait for background process to finish
    await page.locator(".card-body b").first().waitFor();//alternative for above will waot for the specific element

    //const alltt = await page.locator(".card-body b").allTextContents();
    //console.log(alltt.at(2).toString());
    const parent = page.locator(".card-body");
    const counter = await parent.count();
   // const expected = 'ADIDAS ORIGINAL';
    for(let i =0; i<counter; i++ ){
        const retVal = await parent.locator("b").nth(i).textContent();
        //console.log(retVal + " here?");
        if(retVal ==='IPHONE 13 PRO'){
            await parent.locator('text= Add To Cart').nth(i).click();
            break;
        }

    }
    await page.pause();
});



test('add cart 2', async function({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();

    await page.waitForLoadState('networkidle');
    const parentloc = page.locator(".card-body");
    const count2 = await parentloc.count();

    for(let i = 0; i< count2; i++){
        const getText = await parentloc.locator("b").nth(i).textContent();
        if(getText ==="ZARA COAT 3"){
            await parentloc.locator("text= Add To Cart").nth(i).click();
            break;
        }

    }
    
    await page.locator("[routerlink*='cart']").click();
    await page.locator("li div").last().waitFor();
    const retText = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(retText).toBeTruthy();


    await page.pause();

})


test('add 3', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();

    await page.waitForLoadState('networkidle');

    const parentL = page.locator('.card-body');
    const countL = await parentL.count();

    for(let i=0; i<countL; i++){

        const getVal = await parentL.locator('b').nth(i).textContent();
        if(getVal ==='ZARA COAT 3'){
            await parentL.locator('text= Add To Cart').nth(i).click();
            break;
        }

    }
    await page.locator("[routerlink*='cart']").click();
    //await page.waitForLoadState('networkidle');
    //const present = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    await page.locator('li div').first().waitFor();
    const present = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    
    expect(present).toBeTruthy();



    //await page.pause();
})






test('add cart 4', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();


    await page.waitForLoadState('networkidle');

    const parentloc = page.locator(".card-body");
    const countp = await parentloc.count();
    
    for(let i=0; i<countp; i++){

        const getVal = await parentloc.locator("b").nth(i).textContent();
        if(getVal ==='ADIDAS ORIGINAL'){
            await parentloc.locator("text=' Add To Cart'").nth(i).click();
            break

        }

    }

    await page.locator("[routerlink*='cart']").click();

    await page.locator('li div').first().waitFor();
    const value = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    //const present = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(value).toBeTruthy();


    await page.locator('text=Checkout').click();
    await page.waitForLoadState('networkidle');

    await page.locator(".input.txt.text-validated").last().pressSequentially("ind");

    const parentL2= page.locator(".ta-results");
    await parentL2.locator("button").last().waitFor();
    const countb = await parentL2.locator("button").count();

    for(let k =0; k<countb; k++){
        const textC= await parentL2.locator("button").nth(k).textContent();
        //await parentL2.locator("").nth(k).textContent().to;
        if(textC.trim()==='India'){
            await parentL2.locator("button").nth(k).click();
            break;
        }
    }


    await page.pause();


    // const parentdrop = page.locator("test");

    // await parentdrop.selectOption("");
})



test('add cart 5', async function ({browser}) {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();


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


//for(let v=0;)


//await page.pause();




    
})





test.only('card 6', async function ({browser}) {
    
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("vrt@gg2.com");
    await page.locator("#userPassword").fill("@Karen23");
    await page.locator("#login").click();


    await page.waitForLoadState('networkidle');


    const parentL = page.locator(".card-body");
    const sizes = await parentL.count();
    const list = ['IPHONE 13 PRO'];

    for(let i=0; i<sizes; i++){
     const val =   await parentL.locator('b').nth(i).textContent();
     if(list.includes(val.trim())){
        await parentL.locator('text= Add To Cart').nth(i).click();
     }
    }

    await page.locator("[routerlink*='cart']").click();

    const parantV = page.locator("li div").first();
    await parantV.waitFor();

    await parantV.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(parantV).toBeTruthy();

    await page.locator("text=Checkout").click();

    const cardp = page.locator('.input.txt.text-validated');
    await cardp.last().waitFor();


    await cardp.last().pressSequentially('ind');


    const parentdrop= page.locator('.ta-results');
    const buttond= parentdrop.locator("button");
    await buttond.first().waitFor();

    for(let d=0; d<await buttond.count(); d++){
        const getD = await buttond.nth(d).textContent();
        if(getD.trim()==='India'){
           await buttond.nth(d).click();
           break;
        }
    }

    //get the email above
    const parentde = page.locator(".details__user");
    const getVald = await parentde.locator('[type="text"]').first().textContent();
    expect(getVald).toEqual("vrt@gg2.comsad");
    await parentde.locator("text=Place Order ").click();
    //get the thank you message
    const thanks = page.locator(".hero-primary");
    await expect(thanks).toHaveText(" Thankyou for the order. ");
    //get the order id
    const orderID = await page.locator(".ng-star-inserted").nth(1).textContent();
    console.log(orderID);


    //click orders
    await page.locator("button[routerlink*='myorders']").click();
    //wait pag to load
    await page.locator(".table").waitFor();
    //get parent table
    const parenttable = page.locator("tbody");
    const textret = parenttable.locator("tr")

    for(let tt= 0; tt< await textret.count(); tt++){
        const idval= await textret.locator("th").nth(tt).textContent();
        if(orderID.includes(idval)){
            //click the button view
          await textret.locator("button").first().click();  
        }

    }

    const idmain=  await page.locator(".col-text.-main").textContent();
    expect(orderID.includes(idmain)).toBeFalsy();
    await page.pause();

})