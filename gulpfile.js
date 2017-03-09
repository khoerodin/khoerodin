const gulp   = require('gulp'); 

const concat = require('gulp-concat');  
const rename = require('gulp-rename');  
const uglify = require('gulp-uglify');

const autoprefixer 	= require('gulp-autoprefixer');
const cleanCss 		= require('gulp-clean-css');
const concatCss 	= require('gulp-concat-css');

const browserSync = require('browser-sync');

gulp.task('scripts', function() {  
    return gulp.src(
    		[
    			'_assets/js/vendor/jquery.min.js',
                '_assets/js/vendor/highlight.min.js',
                '_assets/js/vendor/emojione.min.js',
                '_assets/js/vendor/nprogress.js',
                '_assets/js/default.js',
    			'_assets/js/jekyll.js',
    		])
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('assets/js'));
});

//styles paths
var cssFiles = '_assets/css/*.css',  
    cssDest = 'assets/css';

gulp.task('styles', function() {  
    return gulp.src(cssFiles)
	    .pipe(autoprefixer('last 2 version'))
	    .pipe(concatCss('styles.min.css'))
	    .pipe(cleanCss())
	    .pipe(gulp.dest(cssDest))
});

// Gulp Default Task
gulp.task('default', ['scripts', 'styles']);

gulp.task('browse', function() {
  browserSync({
    server: {
      baseDir: './_site/'
    },
  })
});