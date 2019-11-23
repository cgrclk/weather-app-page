var gulp = require('gulp');
var pug = require('gulp-pug');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('html', function () {
	return gulp.src('./*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./'))
});

gulp.task('css', function () {
	return gulp.src('./scss/main.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./css'))
});
//Test 1
gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', gulp.series('css'));
	gulp.watch('./*.pug', gulp.series('html'));
});