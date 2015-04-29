var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('uglify-js', function() {
  return gulp.src('development/views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('production/views/js'));
});

gulp.task('uglify-css', function () {
  gulp.src('development/views/css/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('production/views/css'));
});

gulp.task('uglify', ['uglify-js', 'uglify-css'], function () {
});
