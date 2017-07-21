# jasmine-web-reporter

Send jasmine2 / protractor results to webhook/service

## Usage in protractor:

```
 onPrepare: function() {
    var webRep = require('jasmine-web-reporter');   
    browser.getProcessedConfig().then(function(config) {
        var browserName = config.capabilities.browserName;
        jasmine.getEnv().addReporter(new webRep.WebReporter({
          projectName:'Project 1',
          module:'Module 1',
          url: 'http://demo.qaconsole.com/testruns',
          environment : 'Stage',
          info : {
            "browserName" : config.capabilities.browserName
          }
        }));
    }); 
}

```

## Usage with jasmine 

Create jasmine.js 
```
const Jasmine = require('jasmine');
const webRep = require('jasmine-web-reporter');

const jasmine = new Jasmine();

jasmine.addReporter(new webRep.WebReporter({
        projectName:'API - Jasmine',
        module:'API',
        url: 'http://demo.qaconsole.com/testruns',
        environment : 'Production',        
      }));

jasmine.loadConfigFile('./spec/support/jasmine.json'); // load jasmine.json configuration
jasmine.execute();
```
Run with node
```
node jasmine.js
```