import React from 'react'
import { Spring, animated } from 'react-spring'
import styles from './Slider.css'

class Slider extends React.Component {
  state = { x: 0, viewportWidth: null }

  componentDidMount() {
    const { clientWidth } = this.viewPort.current

    this.setState({ viewportWidth: clientWidth })
  }

  slideLeft = () => {
    const { viewportWidth } = this.state
    this.setState(({ x }) => ({ x: x + viewportWidth }))
  }

  slideRight = () => {
    const { viewportWidth } = this.state
    this.setState(({ x }) => ({ x: x - viewportWidth }))
  }

  viewPort = React.createRef()

  render() {
    const { children } = this.props
    const { x, viewportWidth } = this.state
    return (
      <div className="App">
        <p>x: {x}</p>
        <p>viewportWidth: {viewportWidth}</p>

        <button onClick={this.slideLeft}>left</button>
        <button onClick={this.slideRight}>right</button>

        <div ref={this.viewPort} className={styles.viewPort}>
          <Spring native from={{ x: 0 }} to={{ x }}>
            {({ x }) => (
              <animated.div
                style={{
                  transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
                }}
                className={styles.slides}
              >
                {React.Children.map(children, (child, i) => (
                  <div
                    style={{ width: `${viewportWidth}px` }}
                    className={styles.slide}
                    key={i}
                  >
                    {child}
                  </div>
                ))}
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
    )
  }
}

export default Slider
