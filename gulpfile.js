// Load plugins
var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
cache = require('gulp-cache'),
livereload = require('gulp-livereload'),
del = require('del'),
connect = require('gulp-connect'),
coffee = require('gulp-coffee');

// Styles
gulp.task('styles', function() {
  return sass('styles/main.sass', { style: 'expanded' })
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest('dist/styles'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/styles'))
  .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('coffee', function() {
  return gulp.src('coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', function (err) { console.log(err); }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Coffee task complete' }));
});

// Clean
gulp.task('clean', function(cb) {
  del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

// Watch
gulp.task('watch', function() {
 
  // Watch .scss files
  gulp.watch('styles/**/*.sass', ['styles']);
  
  // Watch .js files
  gulp.watch('coffee/**/*.coffee', ['coffee']);

  // Create LiveReload server
  livereload.listen();
  
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
  
});

// Webserver
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('watch', 'webserver');
});