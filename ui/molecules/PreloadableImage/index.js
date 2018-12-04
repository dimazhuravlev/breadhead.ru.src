import React from 'react'
import cx from 'classnames'
import styles from './PreloadableImage.css'
import Image from '@site/ui/atoms/Image'

class PreloadableImage extends React.Component {
  state = { loaded: false, preloaded: false }

  componentDidMount() {
    const img = this.image.current
    if (img && img.complete) {
      this.handleImageLoaded()
    }
    this.handleImagePreload()
  }
  componentDidUpdate() {
    this.handleImagePreload()
  }

  handleImageLoaded = () => {
    if (!this.state.loaded) {
      this.setState({ loaded: true })
    }
  }

  image = React.createRef()

  handleImagePreload() {
    const { preload } = this.props
    const { preloaded } = this.state
    if (preload && !preloaded) {
      this.setState({ preloaded: true })
    }
  }

  render() {
    const { className, src, preloader } = this.props
    const { loaded, preloaded } = this.state
    return (
      <div className={cx(className, styles.wrapper, loaded && styles.loaded)}>
        <Image
          className={cx(styles.image, className)}
          src={preloaded ? src : undefined}
          ref={this.image}
          onLoad={this.handleImageLoaded}
        />
        <Image
          className={cx(styles.preloader)}
          src={preloader}
          alt="загружается"
        />
      </div>
    )
  }
}

export default PreloadableImage
