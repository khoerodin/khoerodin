const gulp = require("gulp");

const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const concatCss = require("gulp-concat-css");

const browserSync = require("browser-sync");

gulp.task("scripts", function() {
  return gulp
    .src([
      "_assets/js/vendor/cash.min.js",
      "_assets/js/vendor/senna.js",
      "_assets/js/default.js"
    ])
    .pipe(uglify())
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest("assets/js"));
});

gulp.task("styles", function() {
  return gulp
    .src([
      "_assets/css/fonts.css",
      "_assets/css/styles.css",
      "_assets/css/icons.css",
      "_assets/css/senna.css"
    ])
    .pipe(autoprefixer("last 2 version"))
    .pipe(concatCss("styles.min.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("assets/css"));
});

// Gulp Default Task
gulp.task("default", gulp.series("scripts", "styles"));

gulp.task("browse", function() {
  browserSync({
    server: {
      baseDir: "./_site/"
    }
  });
});
