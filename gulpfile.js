var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('compress', function() {
  return gulp.src('views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('views/dist/js'));
});

gulp.task('css', function () {
  gulp.src('views/css/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('views/dist/css'));
});
