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
        from={{ width: 0 }}
        to={{ width: active ? 100 : 0 }}
        impl={TimingAnimation}
        config={{ duration: 4000, easing: Easing.linear }}
        onRest={onRest}
      >
        {({ width }) => {
          return (
            <div className={styles.timeLine}>
              <div
                style={{ width: `${width}%` }}
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
