import SlidePicture from './organisms/SlidePictute'
import SlideArticle from './organisms/SlideArticle'
import SlideTitle from './organisms/SlideTitle'
import SlideBrowserPicture from './organisms/SlideBrowserPicture'

export const TemplatesNames = {
  Article: 'article',
  Title: 'title',
  Picture: 'picture',
  BrowserPicture: 'browserPicture'
}

export default {
  [TemplatesNames.Article]: SlideArticle,
  [TemplatesNames.Title]: SlideTitle,
  [TemplatesNames.Picture]: SlidePicture,
  [TemplatesNames.BrowserPicture]: SlideBrowserPicture
}
