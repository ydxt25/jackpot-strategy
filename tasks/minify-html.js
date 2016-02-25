/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var template = require('gulp-template-compile');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

gulp.task('minify-html', function () {
    return gulp.src('app/**/*.html')
        .pipe(template())
        .pipe(concat('templates.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('app/tmp'));
});