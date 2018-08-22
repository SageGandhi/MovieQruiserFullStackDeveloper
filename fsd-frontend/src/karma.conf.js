module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require("karma-junit-reporter")
    ],
    client: {
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    junitReporter: {
			outputDir: "reports/karma/alltest/",
			outputFile: "karma-test-result.xml",
			suite: "",
			useBrowserName: false
		},
    customLaunchers: {
			ChromeHeadless: {
				base: "Chrome",
				flags: [
					"--headless",
					"--disable-gpu",
					"--remote-debugging-port=9222",
					"--no-sandbox"
				]
			}
		},
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};