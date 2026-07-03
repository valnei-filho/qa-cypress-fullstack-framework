const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  defaultCommandTimeout: 10000,

  video: true,

  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",

    setupNodeEvents(on, config) {
    },
  },
});