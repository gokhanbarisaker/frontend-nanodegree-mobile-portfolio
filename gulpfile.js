var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var minifyhtml = require('gulp-minify-html');
var merge = require('merge-stream');

gulp.task('uglify-js', function() {
  var pizza = gulp.src('development/views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('production/views/js'));

  var root = gulp.src('developement/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('production/js'));

  return merge(pizza, root);
});

gulp.task('uglify-css', function () {
  var pizza = gulp.src('development/views/css/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('production/views/css'));

  var root = gulp.src('development/css/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('production/css'));

  return merge(pizza, root);
});

gulp.task('minify-html', function() {
  var options = {
    conditionals: true,
    spare:true
  };

  var pizza = gulp.src('development/views/pizza.html')
    .pipe(minifyhtml(options))
    .pipe(gulp.dest('production/views'));

  var root = gulp.src('development/*.html')
    .pipe(minifyhtml(options))
    .pipe(gulp.dest('production'));

  return merge(pizza, root);
});

gulp.task('image', function() {
  var pizza = gulp.src('development/views/images/*.{png,jpg,jpeg,gif,svg}')
    .pipe(gulp.dest('production/views/images'));

  var root = gulp.src('development/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(gulp.dest('production/img'));

  return merge(pizza, root);
});

gulp.task('uglify', ['uglify-js', 'uglify-css', 'minify-html', 'image'], function () {
});
