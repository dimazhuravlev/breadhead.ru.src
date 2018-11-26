import React from 'react'
import ReactImage from 'react-image'
import cx from 'classnames'
import styles from './Img.css'
import './ImgGlobal.css?CSSModulesDisable'

const Img = ({ className, src, preloader }) => {
  return (
    <ReactImage
      className={className}
      src={[src]}
      key={src}
      loader={
        <img className={cx(className, styles.preloader)} src={preloader} />
      }
      unloader={
        <img className={cx(className, styles.preloader)} src={preloader} />
      }
    />
  )
}

export default Img
