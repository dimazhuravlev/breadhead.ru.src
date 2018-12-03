export const getCalcX = ({ down, xDelta, viewportWidth, shuffler, index }) => Number(down) * xDelta - viewportWidth * shuffler.rotateNumber(index + shuffler.getDiff())
