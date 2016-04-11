/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");
var ngAnnotate = require('gulp-ng-annotate');
var mainBowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');

gulp.task('minify-vendor', function() {

    return gulp.src(mainBowerFiles())
        .pipe(gulpFilter(['*.js']))
        .pipe(uglify())
        .pipe(rename({
            basename: "vendors"
        }))
        .pipe(gulp.dest('build/js'));

});

gulp.task('minify-app', function() {

    return gulp.src([
        'vendor/underscore/underscore.js',
        'vendor/owl.carousel/dist/owl.carousel.js',
        'vendor/chance/chance.js',
        'vendor/jquery-validation/dist/jquery.validate.js',
        'vendor/intl-tel-input/build/js/intlTelInput.js',
        'vendor/intl-tel-input/build/js/utils.js',
        'vendor/jquery.countdown/dist/jquery.countdown.js',
        'vendor/jq-steps/jQSteps.js',
        'app/app.js',
        'app/translations/translations.js',
        'app/tmp/**/*.js',
        'app/common/*.js',
        'app/common/**/*.js',
        'app/states/**/*.js',
        'app/**/*.js',
    ])
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({
            basename: "scripts"
        }))
        .pipe(gulp.dest('build/js'));
});