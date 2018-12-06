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
    this.handlePreload()
  }
  componentDidUpdate() {
    this.handlePreload()
  }

  handleImageLoaded = () => {
    if (!this.state.loaded) {
      this.setState({ loaded: true })
    }
  }

  image = React.createRef()

  handlePreload() {
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
        {preloaded ? (
          <Image
            className={cx(styles.image, className)}
            src={src}
            ref={this.image}
            onLoad={this.handleImageLoaded}
          />
        ) : (
          <div className={cx(styles.image, className)} />
        )}
        <Image preloader={true} className={cx(styles.preloader)} src={preloader} />
      </div>
    )
  }
}

export default PreloadableImage
