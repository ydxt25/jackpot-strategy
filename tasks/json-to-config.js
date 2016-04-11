/**
 * Created by shani on 11/04/2016.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var jsoncombine = require("gulp-jsoncombine");

gulp.task('json-to-js', function () {

    gulp.src("app/translations/*.json")
        .pipe(jsoncombine("translations.js",function(data){
            var str = 'window.widgetApp.translations=';
            str += JSON.stringify(data) + ';';

            return new Buffer(str);
        }))
        .pipe(gulp.dest("app/translations/"));
});