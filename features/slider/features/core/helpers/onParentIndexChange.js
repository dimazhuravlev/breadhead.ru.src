export const onParentIndexChange = ({ index, parentIndex, setIndex }) => () => {
  if (index != parentIndex) {
    setIndex(parentIndex)
  }
}
