export const getImmediate = ({ down, shuffler, savedDiff }) => down || (shuffler.getDiff() !== savedDiff)
