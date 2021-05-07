var gulp = require('gulp');
var gulpless = require('gulp-less');

gulp.task('styles',function(){
var srcfile = './www/dist/private/main.less';
var dest = './www/dist/public/main.css';
return gulp
    .src(srcfile)
    .pipe(gulpless())
    .pipe(gulp.dest(dest))
});