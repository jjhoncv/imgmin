const gulp = require('gulp');
const imagemin2 = require('./lib/imagemin2.js');

//quality 1 - 99

gulp.task('default', () =>
	gulp.src(['imgs/**/*.jpg'])
		.pipe(imagemin2({dist: 'dist/', quality:80}))
		.pipe(gulp.dest('dist'))
);