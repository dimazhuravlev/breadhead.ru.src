class Computer {
  prevLock = false

  getCalcX = ({ down, xDelta, lock, viewportWidth, shuffler, index }) => {
    const baseXOffset =
      -viewportWidth * shuffler.rotateNumber(index + shuffler.getDiff())

    if (lock) {
      return baseXOffset
    }

    return Number(down) * xDelta + baseXOffset
  }
}

export default Computer
