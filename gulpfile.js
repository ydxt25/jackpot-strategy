/**
 * Created by roee on 10/08/15.
 */

// Include gulp
var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./tasks');


gulp.task('minify', [ 'clean-build', 'minify-html', 'minify-app', 'minify-css' ]);
gulp.task('build', [ 'minify', 'copyimages', 'inject-build' ]);
gulp.task('fix-index', [ 'inject-app', 'wiredep' ]);

