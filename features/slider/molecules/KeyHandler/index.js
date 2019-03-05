import React from 'react'
import ReactKeyHandler from 'react-key-handler'

const KeyHandler = ({ isVisible, nextSlide, prevSlide }) =>
  isVisible ? (
    <>
      <ReactKeyHandler
        keyEventName="keydown"
        keyValue="ArrowLeft"
        onKeyHandle={prevSlide}
      />
      <ReactKeyHandler
        keyEventName="keydown"
        keyValue="ArrowRight"
        onKeyHandle={nextSlide}
      />
    </>
  ) : null

export default React.memo(
  KeyHandler,
  ({ isVisible: prevVisible }, { isVisible: nextVisible }) =>
    prevVisible === nextVisible
)
