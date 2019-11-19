const gulp = require('gulp')
const sftp = require('gulp-sftp-up4')
const config = require('./config/env.js');

gulp.task('sync', function() {
  return gulp.src('./dist/**/*')
    .pipe(sftp({
      host: config.host,
      user: 'root',
      pass: config.pass,
      remotePath: '/root/baseWeb'
    }))
})