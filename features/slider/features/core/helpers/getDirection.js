export const getDirection = ({ down, xDelta, parentIndex, index }) => Math.sign(down ? -xDelta : parentIndex - index)
