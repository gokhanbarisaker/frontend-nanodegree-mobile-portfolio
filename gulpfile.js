var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('compress', function() {
  return gulp.src('js/css/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
  gulp.src('./styles/**/*.css')
    .pipe(uglifycss({
      max-line-len: 80
    }))
    .pipe(gulp.dest('./dist/'));
});
