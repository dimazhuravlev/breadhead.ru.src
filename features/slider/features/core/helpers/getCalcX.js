const Y_OFFSET_THRESHOLD = 2

export const getCalcX = ({
  down,
  xDelta,
  yDelta,
  viewportWidth,
  shuffler,
  index
}) => {
  const baseXOffset =
    -viewportWidth * shuffler.rotateNumber(index + shuffler.getDiff())
  return Math.abs(yDelta) < Y_OFFSET_THRESHOLD
    ? Number(down) * xDelta + baseXOffset
    : baseXOffset
}
