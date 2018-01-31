var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');

/* -------------------------- */

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['sass', 'browserSync'], function (){
	gulp.watch('app/scss/**/*.scss', ['sass']); 
	// Reloads the browser whenever HTML or JS files change
	gulp.watch('app/*.html', browserSync.reload); 
	gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	});
});

gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
	// Single entry point to browserify 
	gulp.src('app/js/main.js')
		.pipe(browserify({
			insertGlobals : true,
			debug : !gulp.env.production
		}))
		.pipe(rename(function (path) {
			path.basename = 'bundle';
		  }))
		.pipe(gulp.dest('./build'));
});

gulp.task('babel', () =>
	gulp.src('app/js/main.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('dist'))
);

gulp.task('lint', () => {
	// ESLint ignores files with "node_modules" paths.
	// So, it's best to have gulp ignore the directory as well.
	// Also, Be sure to return the stream from the task;
	// Otherwise, the task may end before the stream has finished.
	return gulp.src(['**/**/*.js','!node_modules/**'])
	// eslint() attaches the lint output to the "eslint" property
	// of the file object so it can be used by other modules.
		.pipe(eslint())
	// eslint.format() outputs the lint results to the console.
	// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
	// To have the process exit with an error code (1) on
	// lint error, return the stream and pipe to failAfterError last.
		.pipe(eslint.failAfterError());
});


gulp.task('default', ['watch']);