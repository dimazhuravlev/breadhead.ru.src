export const onDownChange = ({ down, xDelta, pxThreshold, changeSlide }) => () => {
  if (!down) {
    if (xDelta < -pxThreshold) {
      changeSlide(1)
    }
    if (xDelta > pxThreshold) {
      changeSlide(-1)
    }
  }
}
