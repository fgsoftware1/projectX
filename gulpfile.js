var gulp = require('gulp');
var gulpless = require('gulp-less');
var cleanCSS = require('gulp-clean-css');

gulp.task('compile-less',function(){

var srcfile = './www/dist/private/main.less';
var tmp = './www/temp/main.css';

return gulp
    .src(srcfile)
    .pipe(gulpless())
    .pipe(gulp.dest(dest))
});

gulp.task('minify-css', () => {
    return gulp.src('./www/dist/tmp/main.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./www/dist/public/main.css'));
});