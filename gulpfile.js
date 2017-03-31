var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

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
