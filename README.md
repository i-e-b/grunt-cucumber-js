# grunt-cucumber-sigma

Simple and easy way to run your cucumber scripts from Grunt.

__NOTE__ This is a fork of `https://www.npmjs.org/package/grunt-cucumber` which appears to have gone stale.

This updated repo is available through `npm install grunt-cucumber-sigma`.
The only change in this repo is to require later versions of the official Cucumber repo, which include updated features and bug fixes.


## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to
check out the [Getting Started](http://gruntjs.com/getting-started)
guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install
and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
$ npm install grunt-cucumber-sigma --save-dev
```
Then add this configuration to your project's `Gruntfile.js`.

```js
grunt.loadNpmTasks('grunt-cucumber-sigma');
```

## Cucumberjs Task
_Run this task with the `grunt cucumberjs` command._

### Options

#### steps
Type: `String`

Default: `''`

Require files before executing the features. If this option is not
specified, all *.js and *.coffee files that are siblings or below the
features will be loaded automatically. Automatic loading is disabled
when this option is specified, and all loading becomes explicit.

Files under directories named "support" are always loaded first.

#### tags
Type: `String|Array`

Default: `''`

Only execute the features or scenarios with tags
matching TAG_EXPRESSION. Scenarios inherit tags
declared on the Feature level. The simplest
TAG_EXPRESSION is simply a tag. Example:
`tags: '@dev'`

When a tag in a tag expression starts with a ~,
this represents boolean NOT. Example:
`tags: '~@dev'`

 A tag expression can have several tags separated
by a comma, which represents logical OR. Example:
`tags: '@dev,@wip'`

A tag expression can have an array of tags to be applied,
this represents a logical AND. Example:

`tags: ['@dev',@wip]`

#### format
Type: `String`

Default: `''`

How to format features (default: progress).
Available formats:
* pretty  : prints the feature as is
* progress: prints one character per scenario
* json    : prints the feature as JSON
* summary : prints a summary only, after all scenarios were executed

#### modulePath
Type: `String`

Default: `'cucumber'`

Used to set the path to Cucumber.js's `lib/cucumber.js` 
file if you don't want to load it from the `npm_modules` 
directory using the default `require('cucumber')`. Useful for running
customized versions of Cucumber.js for a specific project. 
It is helpful when you need to modify the Cucumber.js lib
but you can not open source the contributions.

Example: `modulePath: "../../custom_libs/cucumberjs/lib/cucumber.js"`

#### coffee
Type: `Boolean`

Default: `false`

When true, cucumberjs will output code snippets in coffeescript

### Usage Examples


#### Basic Use
```js
// Project configuration.
grunt.initConfig({
  cucumberjs: {
    src: 'path/to/features',
    options: {
      steps: "path/to/step_definitions"
    }
  }
});
```

## Getting started with Cucumber
See
* https://github.com/cucumber/cucumber/wiki/Gherkin
* https://www.npmjs.org/package/cucumber 

## Bugs

Help us squash them by submitting an issue that describes how you encountered it; please be as specific as possible including operating system, node, grunt, and grunt-cucumber-js versions.

## Release History

see [CHANGELOG](CHANGELOG.md).

## License
Copyright (c) 2012 "s9tpepper" Omar Gonzalez & contributors.
Licensed under the MIT license.
