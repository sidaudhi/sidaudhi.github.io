var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var nib = require('nib');
var jade = require('gulp-jade')

gulp.task('default',['watch']);

gulp.task('watch',['views','styles'],function(){
  gulp.watch('./source/views/*.jade',['views']);
  gulp.watch('./source/stylesheets/*.styl',['styles']);
});

gulp.task('styles', function() {
  return gulp.src([
      './source/stylesheets/*.styl'
    ])
    .pipe(stylus({use:nib()}))
    .pipe(concatCss('site.css'))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('views',function(){
  gulp.src('./source/views/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('.'))
})
