const { test, expect, request } = require('@playwright/test')
const payload = { userEmail: "vrt@gg2.com", userPassword: "@Karen23" }
let tokens


test.beforeAll(async function () {
    const apiContext = await request.newContext();
    const login = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: payload
    })

    expect(login.ok()).toBeTruthy();
    const reponse = await login.json();
    tokens = reponse.token;
    console.log(tokens);

})


test.only('main', async function ({ browser }) {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.addInitScript(function (value) {
        window.localStorage.setItem('token', value)
    }, tokens);
    await page.goto("https://rahulshettyacademy.com/client");
    await expect(page).toHaveTitle("Let's Shop");
    //await page.pause();

})