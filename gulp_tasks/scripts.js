const gulp = require('gulp');
const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src([
    conf.path.src('**/*.js'),
    '!' + conf.path.src('mocks.js'),
    '!' + conf.path.src('**/mock.js')
  ])
    .pipe(gulp.dest(conf.path.tmp()));
}
