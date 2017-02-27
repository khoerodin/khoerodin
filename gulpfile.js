const gulp   = require('gulp'); 

const concat = require('gulp-concat');  
const rename = require('gulp-rename');  
const uglify = require('gulp-uglify');

const autoprefixer 	= require('gulp-autoprefixer');
const cleanCss 		= require('gulp-clean-css');
const concatCss 	= require('gulp-concat-css');

gulp.task('scripts', function() {  
    return gulp.src(
    		[
    			'_assets/js/jquery.min.js',
    			'_assets/js/highlight.min.js',
    			'_assets/js/highlightjs-line-numbers.min.js',
    			'_assets/js/jquery.mousewheel.js',
    			'_assets/js/mwheelIntent.js',
    			'_assets/js/jquery.jscrollpane.min.js',
    			'_assets/js/emojione.min.js',    			
    			'_assets/js/jquery.fitvids.js',
    			'_assets/js/scripts.js',
    			'_assets/js/lunr.min.js',
    			'_assets/js/search.js',
    		])
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('search', function() {  
    return gulp.src(
    		[
    			'_assets/js/lunr.min.js',
    			'_assets/js/search.js',
    		])
        .pipe(uglify())
        .pipe(concat('search.min.js'))
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