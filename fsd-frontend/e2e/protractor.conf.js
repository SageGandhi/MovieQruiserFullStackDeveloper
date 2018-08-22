const { SpecReporter } = require('jasmine-spec-reporter');
const JasmineReporter = require('jasmine-reporters');
//Added 
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'firefox',
    chromeOptions: {
      args: ["--headless",
        "--window-size=1024x768",
        "no-sandbox",
        '--disable-web-security'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new JasmineReporter.JUnitXmlReporter({
      savePath: 'reports/protractor/alltests/',
      consolidateAll: true,
      filePrefix: 'protractor-e2etest-result.xml'
    }));
    browser.driver.get(browser.baseUrl);
  }
};