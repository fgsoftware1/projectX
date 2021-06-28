import { task, src, dest } from "gulp";
import { init } from "gulp-sourcemaps";
import babel from "gulp-babel";

task("babel",async function () {
    src('./*.js')
    .pipe(init())
    .pipe(babel())
    .pipe(dest("."));
});