Send jasmine2 / protractor results to webhook/service

Usage in protractor:

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