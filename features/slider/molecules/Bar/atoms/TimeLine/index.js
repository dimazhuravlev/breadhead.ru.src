import React from 'react'
import { Spring } from 'react-spring'
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'
import styles from './timeLine.css'

class TimeLine extends React.Component {
  render() {
    const { active, onRest, animate } = this.props
    return (
      <Spring
        reset={active}
        immediate={!animate}
        from={{ transform: 0 }}
        to={{ transform: active ? 1 : 0 }}
        impl={TimingAnimation}
        config={{ duration: 5000, easing: Easing.linear }}
        onRest={onRest}
      >
        {({ transform }) => {
          return (
            <div className={styles.timeLine}>
              <div
                style={{ transform: `scaleX(${transform})` }}
                className={styles.progressBar}
              />
            </div>
          )
        }}
      </Spring>
    )
  }
}

export default TimeLine
