ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend$ npm install
npm WARN bootstrap@4.1.3 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.1.3 requires a peer of popper.js@^1.14.3 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 6 packages from 39 contributors, removed 4 packages, updated 8 packages and audited 24661 packages in 10.621s
found 15 vulnerabilities (9 low, 6 high)
  run `npm audit fix` to fix them, or `npm audit` for details

ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend$ cd node_modules/pr
prelude-ls/           preserve/             process/              promise/              protractor/           prr/
prepend-http/         pretty-error/         process-nextick-args/ promise-inflight/     proxy-addr/
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend$ cd node_modules/protractor/
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor$ ls
bin    CHANGELOG.md     DEVELOPER.md  exampleTypescript  LICENSE       package.json  tsconfig.json  ts_spec_config.json
built  CONTRIBUTING.md  example       gulpfile.js        node_modules  README.md     tslint.json
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor$ cd node_modules/
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules$ ls
adm-zip  ansi-styles  chalk  del  globby  minimist  pify  source-map-support  supports-color  @types  webdriver-manager
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules$ cd webdriver-manager/
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager$ ls
bin  built  CHANGELOG.md  config.json  CONTRIBUTING.md  docs  gulpfile.js  LICENSE  package.json  README.md  selenium
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager$ cd bin/
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/bin$ node webdriver-manager update
webdriver-manager: using global installed version 12.1.0
[12:13:21] I/config_source - curl -o/home/ubuntu/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/selenium/standalone-response.xml https://selenium-release.storage.googleapis.com/
[12:13:21] I/config_source - curl -o/home/ubuntu/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/selenium/gecko-response.json https://api.github.com/repos/mozilla/geckodriver/releases
[12:13:21] I/update - chromedriver: file exists /home/ubuntu/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.41.zip
[12:13:21] I/update - chromedriver: unzipping chromedriver_2.41.zip
[12:13:21] I/update - chromedriver: setting permissions to 0755 for /home/ubuntu/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.41
[12:13:21] I/update - chromedriver: chromedriver_2.41 up to date
[12:13:21] I/downloader - curl -o/home/ubuntu/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.21.0.tar.gz https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-linux64.tar.gz
[12:13:21] I/update - geckodriver: unzipping geckodriver-v0.21.0.tar.gz
[12:13:21] I/update - geckodriver: setting permissions to 0755 for /home/ubuntu/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.21.0
[12:13:21] I/downloader - curl -o/home/ubuntu/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar https://selenium-release.storage.googleapis.com/3.14/selenium-server-standalone-3.14.0.jar
ubuntu@ip-172-31-87-38:~/Documents/prajitws/fsd-frontend/node_modules/protractor/node_modules/webdriver-manager/bin$