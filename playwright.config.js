// // @ts-check
// import { defineConfig, devices } from '@playwright/test';



// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// const config = ({
//   testDir: './tests', //specific test to run
//   /* Run tests in files in parallel */
//   timeout: 5000*2, //timeouts for each test
//   expect: { 
//     timeout: 5000 //timeouts for each assertion
//   }, 

//   reporter : 'html',
  
//   use: {
//     browserName: 'chromium', //browser
//     headless : false, // show browser
//     viewport: null // full screen?

//   },



// });

// module.exports =config

import { defineConfig } from '@playwright/test';

const config = defineConfig({
  testDir: './tests',
  timeout: 20000 * 3,
  expect: {
    timeout: 25000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null,
    screenshot: 'on',
    trace: 'retain-on-failure', //on(for all test) or etain-on-failure
    launchOptions: {
      args: ['--start-maximized']
    }
  }
});

export default config;
