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

import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 20000 * 3,
  expect: {
    timeout: 25000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    viewport: null,
    screenshot: 'on',
    video: 'retain-on-failure',
    //...devices['Galaxy S24'],
    trace: 'retain-on-failure', //on(for all test) or retain-on-failure
    launchOptions: {
      args: ['--start-maximized']
    }
  }
});

export default config;
