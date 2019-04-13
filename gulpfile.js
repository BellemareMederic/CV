'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssnano');
var prefix = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('sass:prod', ()=>{
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(prefix({browsers: ['last 2 versions']}))
    .pipe(cssmin())
    .pipe(gulp.dest('./css'))
});