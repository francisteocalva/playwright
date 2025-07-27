const { test, expect, request } = require('@playwright/test')
const payload = { userEmail: "vrt@gg2.com", userPassword: "@Karen23" }


test.beforeAll(async function () {
    const apiContext = await request.newContext();
    const login = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: payload
    })

    expect(login.ok()).toBeTruthy();

})