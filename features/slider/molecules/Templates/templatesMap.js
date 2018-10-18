import SlidePicture from './organisms/SlidePictute'
import SlideArticle from './organisms/SlideArticle'
import SlideBrowserPicture from './organisms/SlideBrowserPicture'

export const TemplatesNames = {
  Article: 'article',
  Picture: 'picture',
  BrowserPicture: 'browserPicture'
}

export default {
  [TemplatesNames.Article]: SlideArticle,
  [TemplatesNames.Picture]: SlidePicture,
  [TemplatesNames.BrowserPicture]: SlideBrowserPicture
}
