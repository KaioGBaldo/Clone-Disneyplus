const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') // Fixed path
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*') // Fixed path
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function watchFiles() {
    gulp.watch('./src/styles/*.scss', styles); // Fixed path
}

// Export tasks
exports.styles = styles;
exports.images = images;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, images);