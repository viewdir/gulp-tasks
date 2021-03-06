const gulp = require('gulp');
const connect = require('gulp-connect');

module.exports = function(config) {

    gulp.task('examples', ['sync'], function() {
        connect.server({
            root: config.directories.examples,
            middleware: function(connect, opt) {
                return [
                    //utils.mount(connect, config.dist) // serve contents of the dist folder
                    //utils.mount(connect, './node_modules') // serve node_modules
                ]
            }
        });
    });

}