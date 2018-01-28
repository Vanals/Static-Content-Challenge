const gulp = require('gulp');
const markdown = require('gulp-markdown');

gulp.task('default', () =>
    gulp.src('./content/valves/index.md')
        .pipe(markdown())
        .pipe(gulp.dest(''))
);
