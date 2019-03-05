export const onDiffChange = ({ savedDiff, shuffler, setDiff }) => () => {
  if (savedDiff !== shuffler.getDiff()) {
    setDiff(shuffler.getDiff())
  }
}

