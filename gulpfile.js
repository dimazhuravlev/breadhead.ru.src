const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename')
const imageResize = require('gulp-image-resize')

const targetImages = ['static/img/**/*.{jpg,png}', '!static/img/**/*-compress.{jpg,png}']

gulp.task('images', () =>
  gulp.src(targetImages)
    .pipe(imagemin())
    .pipe(imageResize({ percentage: 66, imageMagick: true }))
    .pipe(rename({ suffix: '-compress' }))
    .pipe(gulp.dest('static/img/'))
)

gulp.task('default', ['images'])
