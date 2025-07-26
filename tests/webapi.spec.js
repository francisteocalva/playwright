const { test, expect, request } = require("@playwright/test")
const payload = { userEmail: "vrt@gg2.com", userPassword: "@Karen23" }
let tokens;

test.beforeAll(async function () {

    const apiContext = await request.newContext();
    const loginR = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: payload
        });
    expect(loginR.ok()).toBeTruthy();
    const jsonResponses = await loginR.json();
    tokens = jsonResponses.token;
    console.log(tokens)
})



test.only('login2', async function ({ browser }) {

    const context = await browser.newContext();
    const page = await context.newPage();


    page.addInitScript(function(value) {
        window.localStorage.setItem('token', value);
    }, tokens);


    await page.goto("https://rahulshettyacademy.com/client");
    // await page.locator("#userEmail").fill("vrt@gg2.com");
    // await page.locator("#userPassword").fill("@Karen23");
    // await page.locator("#login").click();
    await expect(page).toHaveTitle("Let's Shop");
    //await page.waitForLoadState("networkidle"); //will wait for background process to finish
    await page.locator(".card-body b").first().waitFor();//alternative for above will waot for the specific element

    const alltt = await page.locator(".card-body b").allTextContents();
    console.log(alltt.at(2).toString());

   await page.pause();


})
