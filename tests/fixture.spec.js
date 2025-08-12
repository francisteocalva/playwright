//import { expect } from '@playwright/test';
//import { testing } from './fixtures.js';
const{testing} = require('../utils/fixture')
const{dashboardF} = require('../pageobject/DashboardF')


testing('Uisng fixture', async function ({logginpage}) {
    //await expect(logginpage).toHaveURL("asd");
    const dash = new dashboardF(logginpage)
    await dash.clickButton("ADIDAS ORIGINAL");
    //await logginpage.locator("#sad").click();
    //await logginpage.pause();
})