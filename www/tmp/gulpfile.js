"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var gulp = require("gulp");

var gulpless = require("gulp-less");

var coffee = require("gulp-coffee");

var cleanCSS = require("gulp-clean-css");

var uglify = require("gulp-uglify");

var sourcemaps = require("gulp-sourcemaps");

var babel = require("gulp-babel");

gulp.task('compile-less', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", gulp.src(['./www/dist/private/*.less', './www/dist/private/*.less']).pipe(gulpless()).pipe(gulp.dest('www/tmp')));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
gulp.task('compile-coffee', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          gulp.src(['./www/dist/private/*.coffee', './www/dist/private/scripts/*.coffee']).pipe(coffee()).pipe(gulp.dest('./www/tmp'));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
gulp.task('minify-css', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", gulp.src('www/tmp/*.css').pipe(sourcemaps.init()).pipe(cleanCSS()).pipe(sourcemaps.write('mapping')).pipe(gulp.dest('./www/dist/public/styles')));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
gulp.task("babel", function () {
  return gulp.src(['*.js', './www/tmp/*.js']).pipe(sourcemaps.init()).pipe(babel()).pipe(sourcemaps.write("mapping")).pipe(gulp.dest("./www/tmp"));
});
gulp.task('minify-js', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          gulp.src('www/tmp/*.js').pipe(sourcemaps.init()).pipe(uglify()).pipe(sourcemaps.write('mapping')).pipe(gulp.dest('./www/dist/public/scripts'));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));
//# sourceMappingURL=mapping/gulpfile.js.map
