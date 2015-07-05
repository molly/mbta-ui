// Load plugins
var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
livereload = require('gulp-livereload'),
connect = require('gulp-connect'),
rename = require('gulp-rename'),
react = require('gulp-react'),
htmlreplace = require('gulp-html-replace'),
source = require('vinyl-source-stream'),
browserify = require('browserify'),
watchify = require('watchify'),
reactify = require('reactify'),
streamify = require('gulp-streamify');

var path = {
  HTML: 'src/html/index.html',
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  SASS: 'src/sass/main.sass',
  MINIFIED_OUT_JS: 'build.min.js',
  MINIFIED_OUT_CSS: 'build.min.css',
  OUT: 'build.js',
  DEST_SRC_JS: 'dist/src/js',
  DEST_SRC_CSS: 'dist/src/css',
  DEST_BUILD: 'dist/build',
  DEST: 'dist',
  ENTRY_POINT: './src/js/App.js'
}

gulp.task('styles', function() {
  return sass(path.SASS, { style: 'expanded' })
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest(path.DEST_SRC_CSS))
  .pipe(rename(path.MINIFIED_OUT_CSS))
  .pipe(minifycss())
  .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('watch', function() {
  gulp.watch(path.SASS, ['styles']);
  gulp.watch(path.HTML, ['replaceHTMLdev']);

  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function() {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC_JS));
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC_JS));
});

gulp.task('build', function() {
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT_JS))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTMLprod', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': path.MINIFIED_OUT_JS,
      'css': path.MINIFIED_OUT_CSS}))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTMLdev', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({'js': 'src/js/' + path.OUT,
      'css': 'src/css/main.css'}))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 8085
  });
});

gulp.task('default', function() {
  gulp.start('watch', 'webserver');
});

gulp.task('production', ['replaceHTMLprod', 'build'])
