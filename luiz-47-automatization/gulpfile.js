const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const watch = require('gulp-watch');

gulp.task('build-js', () => {
  gulp.src('src/**/*.js')
    .pipe(babel({presets : ['es2015', 'es2017']}))
    .pipe(uglify())
    .pipe(concat('curso.min.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
  watch('src/**/*.js', () => gulp.start('build-js'));
});
