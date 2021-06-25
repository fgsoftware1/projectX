var gulp = require("gulp");
var gulpless = require("gulp-less");
var coffee = require("gulp-coffee");
var cleanCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

gulp.task('compile-less',async function(){
    return gulp
    .src(['./www/dist/private/*.less','./www/dist/private/*.less'])
    .pipe(gulpless())
    .pipe(gulp.dest('www/tmp'))
});

gulp.task('compile-coffee',async function(){
    gulp.src(['./www/dist/private/*.coffee','./www/dist/private/scripts/*.coffee'])
    .pipe(coffee())
    .pipe(gulp.dest('./www/tmp'));
})

gulp.task('minify-css',async function(){
    return gulp.src('www/tmp/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('mapping'))
    .pipe(gulp.dest('./www/dist/public/styles'));
});

gulp.task("babel", function () {
    return gulp.src(['*.js','./www/tmp/*.js'])
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write("mapping"))
      .pipe(gulp.dest("./www/tmp"));
});

gulp.task('minify-js',async function() {
        gulp.src('www/tmp/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('mapping'))
        .pipe(gulp.dest('./www/dist/public/scripts'))
});