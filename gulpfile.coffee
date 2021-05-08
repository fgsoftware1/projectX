gulp = require('gulp')
gulpless = require('gulp-less')
coffee = require('gulp-coffee')
cleanCSS = require('gulp-clean-css')
uglify = require('gulp-uglify')
sourcemaps = require('gulp-sourcemaps')

gulp.task 'compile-less', ->
  gulp.src([
    './www/dist/private/*.less'
    './www/dist/private/*.less'
  ]).pipe(gulpless()).pipe gulp.dest('www/tmp')
gulp.task 'compile-coffee', ->
  gulp.src([
    './www/dist/private/*.coffee'
    './www/dist/private/scripts/*.coffee'
  ]).pipe(coffee()).pipe gulp.dest('./www/tmp')
  return
gulp.task 'minify-css', ->
  gulp.src('www/tmp/*.css').pipe(sourcemaps.init()).pipe(cleanCSS()).pipe(sourcemaps.write('mapping')).pipe gulp.dest('./www/dist/public/styles')
gulp.task 'minify-js', ->
  gulp.src('www/tmp/*.js').pipe(sourcemaps.init()).pipe(uglify()).pipe(sourcemaps.write('mapping')).pipe gulp.dest('./www/dist/public/scripts')
  return