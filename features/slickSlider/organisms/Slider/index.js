import React from 'react'
import SlickSlider from 'react-slick'
import styles from './Slider.css'
import './SliderGlobal.css?CSSModulesDisable'
import NavButton from '../../molecules/NavButton'
import Bar from '../../molecules/Bar'
const settings = {
  prevArrow: <NavButton className={styles.navButton} direction="left" />,
  nextArrow: <NavButton className={styles.navButton} direction="right" />,
}
class Slider extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.wrapper}>
        <Bar index={0} quantity={children.length} onRest={() => {}} />
        <SlickSlider {...settings}>{children}</SlickSlider>
      </div>
    )
  }
}

export default Slider
