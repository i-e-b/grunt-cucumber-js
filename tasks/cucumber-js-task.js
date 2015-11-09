module.exports = function (grunt) {

    // The Cucumber Task
    grunt.registerMultiTask('cucumberjs', 'Runs cucumber.js', function () {
        // Make this task async
        var done = this.async();

        // Load all the options
        var options = this.options();

        var steps = grunt.option('steps') || options.steps;
        var tags = grunt.option('tags') || options.tags;
        var useShortStackTraces = options.useShortStackTraces;
        var unusedSteps = options.unusedSteps;
        var format = grunt.option('format') || options.format;
        var modulePath = options.modulePath;
        var coffee = options.coffee;
        var colors = grunt.option('nocolor') || options.nocolor;

        grunt.verbose.writeflags(options, 'Options');

        var callback = function(succeeded) {
            var exitFunction = function() {
                done(succeeded);
            };

            // --- exit after waiting for all pending output ---
            var waitingIO = false;
            process.stdout.on('drain', function() {
                if (waitingIO) {
                    // the kernel buffer is now empty
                    exitFunction();
                }
            });
            if (process.stdout.write("")) {
                // no buffer left, exit now:
                exitFunction();
            } else {
                // write() returned false, kernel buffer is not empty yet...
                waitingIO = true;
            }
        };

        var files = this.filesSrc;


        var execOptions = ['node', 'node_modules/.bin/cucumber-js'];

        var _ = grunt.util._;
        if (! _.isEmpty(files)) {
            execOptions = execOptions.concat(files);
        }

        if (useShortStackTraces) {
            execOptions.push('--shortStackTraces');
        }

        if (unusedSteps) {
            execOptions.push('--unusedSteps');
        }
        
        if (nocolor) {
            execOptions.push('--no-colors');
        }

        if (! _.isEmpty(steps)) {
            execOptions.push('-r');
            execOptions.push(steps);
        }

        if (! _.isEmpty(tags)) 
		{
			var allTags = [].concat(tags);
			
			allTags.forEach(function (t) {
				execOptions.push('-t', t);
			});
        }

        if (! _.isEmpty(format)) {
            execOptions.push('-f');
            execOptions.push(format);
        }

        if (coffee) {
            execOptions.push('--coffee');
        }

        var cucumberPath = 'cucumber-sigma';
        if (! _.isEmpty(modulePath)) {
            cucumberPath = modulePath;
        }

        grunt.verbose.writeln('Exec Options: ' + execOptions.join(' '));
        var cucumber = require(cucumberPath);
        cucumber.Cli(execOptions).run(callback);

    });
};
