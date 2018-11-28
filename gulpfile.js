const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename')

const targetImages = ['static/img/**/*.{jpg,png,gif}', '!static/img/**/*-compress.{jpg,png,gif}']

gulp.task('images', () =>
  gulp.src(targetImages)
    .pipe(imagemin())
    .pipe(rename({ suffix: '-compress' }))
    .pipe(gulp.dest('static/img/'))
)

gulp.task('watch', () =>
  gulp.watch(targetImages, ['images'])
)

gulp.task('default', [ 'images' ])
