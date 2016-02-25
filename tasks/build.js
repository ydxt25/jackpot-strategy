/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var rename = require("gulp-rename");
var del = require('del');
var inject = require('gulp-inject');
var replace = require('gulp-replace');
var duration = require('gulp-duration');

gulp.task('copyimages', function() {
    return gulp.src('./images/*')
        .pipe(gulp.dest('./build/images'));
});

gulp.task('clean-build', function() {
    return del(['build/js', 'build/css']);
});

gulp.task('inject-build', [ 'minify' ], function() {
    return gulp.src('./index.html')
        .pipe(inject(gulp.src(['./build/**/vendor*.js', './build/**/scripts*.js', './build/**/templates*.js'], {read: false}), {starttag: '<!-- inject:build:js -->'}))
        .pipe(inject(gulp.src('./build/**/*.css', {read: false}), {starttag: '<!-- inject:build:css -->'}))
        .pipe(replace('src="/build/', 'src="/client/build/'))
        .pipe(replace('href="/build/', 'href="/client/build/'))
        .pipe(gulp.dest('./'))
});
