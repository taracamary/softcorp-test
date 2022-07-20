'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('build', () => {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () => {
    gulp.watch('src/scss/*.scss', (done) => {
        gulp.series(['build'])(done);
    });
});

gulp.task('default', gulp.series(['watch']));
