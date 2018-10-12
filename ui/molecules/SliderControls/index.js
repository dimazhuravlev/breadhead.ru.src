import React from 'react'
import cx from 'classnames'
import styles from './sliderControls.css'

class SliderControls extends React.Component {
  constructor(props) {
    super(props)
    this.buttonLeft = React.createRef()
    this.buttonRight = React.createRef()
    this.arrowLeft = React.createRef()
    this.arrowRight = React.createRef()
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseMove() {
    this.buttonLeft.current.style.backgroundColor = 'var(--redPrimary)'
    this.buttonRight.current.style.backgroundColor = 'var(--redPrimary)'
    this.arrowLeft.current.style.stroke = 'var(--darkPrimary)'
    this.arrowRight.current.style.stroke = 'var(--darkPrimary)'
  }

  handleMouseOut() {
    this.buttonLeft.current.style.backgroundColor = 'var(--darkPrimary)'
    this.buttonRight.current.style.backgroundColor = 'var(--darkPrimary)'
    this.arrowLeft.current.style.stroke = 'var(--beigePrimary)'
    this.arrowRight.current.style.stroke = 'var(--beigePrimary)'
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouseMove}
        onMouseOut={this.handleMouseOut}
        className={styles.background}
      >
        <button
          ref={this.buttonLeft}
          className={cx(styles.button, styles.left)}
        >
          <svg
            className={styles.leftArrow}
            width="14px"
            height="24px"
            viewBox="0 0 14 24"
          >
            <g fill="none">
              <polyline
                ref={this.arrowLeft}
                stroke="var(--beigePrimary)"
                strokeWidth="2"
                points="13 1 2 12 13 23"
              />
            </g>
          </svg>
        </button>

        <button
          ref={this.buttonRight}
          className={cx(styles.button, styles.right)}
        >
          <svg
            className={styles.rightArrow}
            width="14px"
            height="24px"
            viewBox="0 0 14 24"
          >
            <g fill="none">
              <polyline
                ref={this.arrowRight}
                stroke="var(--beigePrimary)"
                strokeWidth="2"
                points="1 1 12 12 1 23"
              />
            </g>
          </svg>
        </button>
      </div>
    )
  }
}

export default SliderControls
