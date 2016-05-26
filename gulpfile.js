var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var os = require('os');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var del = require('del');

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

// watch Js changes and create a bundled js
gulp.task('watch', function(){
  gulp.watch('app/**/*.js', ['processBundledJs']); 
});

gulp.task('processBundledJs', function() {
  runSequence('cleanBundledJs',
              ['bundleJs']);
});

// clean Bundle js
gulp.task('cleanBundledJs', function () {
  return del(['app/bundle.js']);
});

// Bundle all javascript files into one
gulp.task('bundleJs', function () {
  gulp.src(['app/**/module.js', 'app/**/*.js', '!./app/bower_components/**'])
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app'));
});

// default task
gulp.task('default', function() {
   console.log('.........Tasks lined up to run in a sequence by Dr.Rk.......');
  runSequence('processBundledJs',
              ['rk', 'openApp', 'watch']);
});
