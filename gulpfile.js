var gulp = require('gulp');
// var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
var open = require('gulp-open');
var os = require('os');
var jshint = require('gulp-jshint');

//check browser version
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

//connect to server
gulp.task('rk', function() {
	connect.server({
		root: 'app/',
		port: 9999
	});
});

// Open the default application homepage
gulp.task('openApp', function(){
  var options = {
    uri: 'http://localhost:9999',
    app: browser
  };
  gulp.src(__filename)
  .pipe(open(options));
});

// Linting with Jshint
gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
 
// default task
gulp.task('default',
  ['rk', 'openApp', 'lint']
);

