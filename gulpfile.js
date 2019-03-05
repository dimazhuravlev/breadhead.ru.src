const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename')
const imageResize = require('gulp-image-resize')

const desktopImages = [
  'static/img/**/*.{jpg,png}',
  '!static/img/**/mobile/*.{jpg,png}',
  '!static/img/**/*-compress.{jpg,png}',
]
const mobileImages = ['static/img/**/mobile/*.{jpg,png}', '!static/img/**/mobile/*-compress.{jpg,png}']

const DESKTOP_RESIZE_PERCENTAGE = 66
const MOBILE_RESIZE_PERCENTAGE = 50

const updateImagesHandler = (images, resizePercentage) => {
  gulp.src(images)
    .pipe(imagemin())
    .pipe(imageResize({ percentage: resizePercentage, imageMagick: true }))
    .pipe(rename({ suffix: '-compress' }))
    .pipe(gulp.dest('static/img/'))
}

gulp.task('images', () => {
  updateImagesHandler(desktopImages, DESKTOP_RESIZE_PERCENTAGE)
  updateImagesHandler(mobileImages, MOBILE_RESIZE_PERCENTAGE)
})

gulp.task('default', ['images'])
