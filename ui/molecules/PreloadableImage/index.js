import React from 'react'
import cx from 'classnames'
import styles from './PreloadableImage.css'
import resolveStaticSrc from '@site/resolveStaticSrc'

class PreloadableImage extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    const img = this.image.current
    if (img && img.complete) {
      this.handleImageLoaded()
    }
  }

  handleImageLoaded = () => {
    if (!this.state.loaded) {
      this.setState({ loaded: true })
    }
  }
  image = React.createRef()

  render() {
    const { className, src, preloader } = this.props
    const { loaded } = this.state
    return (
      <div className={cx(className, styles.wrapper, loaded && styles.loaded)}>
        <img
          className={cx(styles.image, className)}
          src={resolveStaticSrc(src)}
          ref={this.image}
          onLoad={this.handleImageLoaded}
        />
        <img className={cx(styles.preloader)} src={resolveStaticSrc(preloader)} alt="" />
      </div>
    )
  }
}

export default PreloadableImage
