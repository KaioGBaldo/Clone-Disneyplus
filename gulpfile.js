const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js') // Fixed path
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

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
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/styles/*.js', scripts); // Fixed path
}

// Export tasks
exports.styles = styles;
exports.images = images;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, images, scripts, watchFiles); // Added scripts to default task