// gulp
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

//plugins
var connect = require('gulp-connect');

//connect to server
gulp.task('rk', function() {
	connect.server({
		root: 'app/',
		port: 9999
	});
});

// default task
gulp.task('default',
  ['rk']
);

