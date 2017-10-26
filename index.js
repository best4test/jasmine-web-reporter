exports.WebReporter = function(options) {
	var self = this;
	var testPassed = 0;
	var testTotal = 0;

	self.url = options.url;
	self.projectName = options.projectName;
	self.environment = options.environment;
	self.info = options.info;

	var testRun =
		{
			projectName : self.projectName,
			environment : self.environment,
			info : self.info,
			status : "passed",
			tests : []
		};

	self.specDone = function(sp) {		
		var spec = JSON.parse(JSON.stringify(sp));
		spec._endTime = new Date();
		//remove not needed stack trace.
		for (var i = 0; i < spec.failedExpectations.length;i++)
		{
			spec.failedExpectations[i].stack = '';
		}
		testTotal++;
		if (spec.status === 'failed'){
			testRun.status = "failed";
		}
		if (spec.status === 'passed'){
			testPassed++;
		}
		testRun.tests.push(spec);
	};

	self.jasmineDone = function() {
		testRun.endTime = new Date();
		var request = require('sync-request');
		var res = request('POST', self.url, {
		  json: testRun
		});

	};
};