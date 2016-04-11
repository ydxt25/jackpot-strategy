/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var replace = require('gulp-replace');

gulp.task('inject-app', [ 'wiredep' ], function () {
    var sources = gulp.src([
        'app/app.js',
        'app/translations/translations.js',
        'app/tmp/**/*.js',
        'app/common/*.js',
        'app/common/**/*.js',
        'app/states/**/*.js',
        'app/**/*.js',
    ], { read: false });

    return gulp.src('./index.html')
        .pipe(inject(sources))
        .pipe(replace('/app/', 'app/'))
        .pipe(gulp.dest('./'))
});

