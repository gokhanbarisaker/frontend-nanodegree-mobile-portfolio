var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('uglify-js', function() {
  return gulp.src('views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('views/dist/js'));
});

gulp.task('uglify-css', function () {
  gulp.src('views/css/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('views/dist/css'));
});

gulp.task('uglify', ['compress', 'css'], function () {
});
