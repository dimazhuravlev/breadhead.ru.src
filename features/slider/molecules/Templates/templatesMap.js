import SlidePicture from './organisms/SlidePictute'
import SlideArticle from './organisms/SlideArticle'
import SlideTitle from './organisms/SlideTitle'
import SlideBrowserPicture from './organisms/SlideBrowserPicture'
import SlidePhones from './organisms/SlidePhones'
import SlideTextPhone from './organisms/SlideTextPhone'

export const TemplatesNames = {
  Article: 'article',
  Title: 'title',
  Picture: 'picture',
  BrowserPicture: 'browserPicture',
  Phones: 'phones',
  TextPhone: 'textPhone'
}

export default {
  [TemplatesNames.Article]: SlideArticle,
  [TemplatesNames.Title]: SlideTitle,
  [TemplatesNames.Picture]: SlidePicture,
  [TemplatesNames.BrowserPicture]: SlideBrowserPicture,
  [TemplatesNames.Phones]: SlidePhones,
  [TemplatesNames.TextPhone]: SlideTextPhone
}
