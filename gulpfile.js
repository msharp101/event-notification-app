
//specify required gulp dependencies
var gulp = require('gulp'),
  connect = require('gulp-connect');
  stubby = require('gulp-stubby-server');
 
//define gulp server task with livereload as true
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});
 
//specify reload task - when called tell connect server to reload
gulp.task('reload', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});
 
//specify files to watch, and then call reload function on change
gulp.task('watch', function () {
  gulp.watch(['*.html', 'app/*.js', 'app/*/*/*.*', 'app/shared/css/*.css'], ['reload']);
});

gulp.task('stubby', function(cb) {
    var options = {
        files: [
            'mocks/*.yaml'
        ]
    };
    stubby(options, cb);
});
 
//gulp default will run connect and watch
gulp.task('default', ['connect', 'watch', 'stubby']);