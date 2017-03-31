var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch("./sass/**/*.scss", ['sass']);
});

gulp.task('sass', function () {
  return gulp.src(['./sass/import.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('./assets/css/import.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('compress', function() {
  gulp.src('./index.js')
    .pipe(minify())
    .pipe(gulp.dest('./'))
});
