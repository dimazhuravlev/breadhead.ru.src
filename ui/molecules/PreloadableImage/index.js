import React from 'react'
import cx from 'classnames'
import styles from './PreloadableImage.css'
import Image from '@site/ui/atoms/Image'

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
        <Image
          className={cx(styles.image, className)}
          src={src}
          ref={this.image}
          onLoad={this.handleImageLoaded}
        />
        <Image className={cx(styles.preloader)} src={preloader} alt="" />
      </div>
    )
  }
}

export default PreloadableImage
