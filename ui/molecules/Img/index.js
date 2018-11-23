import React from 'react'
import ReactImage from 'react-image'
import cx from 'classnames'
import styles from './Img.css'
import { Transition, animated } from 'react-spring'

const Img = ({ className, src, preloader }) => {
  return (
    <ReactImage
      className={className}
      src={[src]}
      loader={
        <img className={cx(className, styles.preloader)} src={preloader} />
      }
      container={children => {
        return (
          <Transition
            native
            items={React.Children.toArray(children)}
            keys={child => child.props.src}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {child => props => (
              <animated.div className={styles.wrapper} style={props}>
                {child}
              </animated.div>
            )}
          </Transition>
        )
      }}
    />
  )
}

export default Img
