const gulp = require('gulp')
const postcss = require('gulp-postcss')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin')
const salad = require('postcss-salad')(require('../../salad.config.json'))

gulp.task('compile', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})
gulp.task('less', function () {
  return gulp.src('./src/*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./lib'))
})


function copyfont() {
  return src('./src/images/**')
    .pipe(cssmin())
    .pipe(dest('./lib/images'));
}

gulp.task('build', ['compile','less'])
