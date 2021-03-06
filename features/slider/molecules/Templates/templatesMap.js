import SlidePictureDesktop from './desktopTemplates/SlidePictureDesktop'
import SlideArticleDesktop from './desktopTemplates/SlideArticleDesktop'
import SlideTitleDesktop from './desktopTemplates/SlideTitleDesktop'
import SlideFramePictDesktop from './desktopTemplates/SlideFramePictDesktop'
import SlideFrameVideoDesktop from './desktopTemplates/SlideFrameVideoDesktop'
import SlidePhonesDesktop from './desktopTemplates/SlidePhonesDesktop'
import SlideArticleWithPhoneDesktop from './desktopTemplates/SlideArticleWithPhoneDesktop'
import SlidePhonesVideoDesktop from './desktopTemplates/SlidePhonesVideoDesktop'
import SlideNavDesktop from './desktopTemplates/SlideNavDesktop'

import SlidePictureMobile from './mobileTemplates/SlidePictureMobile'
import SlideArticleMobile from './mobileTemplates/SlideArticleMobile'
import SlideTitleMobile from './mobileTemplates/SlideTitleMobile'
import SlideFramePictMobile from './mobileTemplates/SlideFramePictMobile'
import SlideFrameVideoMobile from './mobileTemplates/SlideFrameVideoMobile'
import SlideNavMobile from './mobileTemplates/SlideNavMobile'

export const TemplatesNames = {
  PictureDesktop: 'pictureDesktop',
  ArticleDesktop: 'articleDesktop',
  TitleDesktop: 'titleDesktop',
  FramePictDesktop: 'framePictDesktop',
  FrameVideoDesktop: 'frameVideoDesktop',
  PhonesDesktop: 'phonesDesktop',
  ArticleWithPhoneDesktop: 'articleWithPhoneDesktop',
  PhonesVideoDesktop: 'phonesVideoDesktop',
  NavDesktop: 'navDesktop',

  PictureMobile: 'pictureMobile',
  ArticleMobile: 'articleMobile',
  TitleMobile: 'titleMobile',
  FramePictMobile: 'framePictMobile',
  FrameVideoMobile: 'frameVideoMobile',
  NavMobile: 'navMobile',
}

export default {
  [TemplatesNames.PictureDesktop]: SlidePictureDesktop,
  [TemplatesNames.ArticleDesktop]: SlideArticleDesktop,
  [TemplatesNames.TitleDesktop]: SlideTitleDesktop,
  [TemplatesNames.FramePictDesktop]: SlideFramePictDesktop,
  [TemplatesNames.FrameVideoDesktop]: SlideFrameVideoDesktop,
  [TemplatesNames.PhonesDesktop]: SlidePhonesDesktop,
  [TemplatesNames.ArticleWithPhoneDesktop]: SlideArticleWithPhoneDesktop,
  [TemplatesNames.PhonesVideoDesktop]: SlidePhonesVideoDesktop,
  [TemplatesNames.NavDesktop]: SlideNavDesktop,

  [TemplatesNames.PictureMobile]: SlidePictureMobile,
  [TemplatesNames.ArticleMobile]: SlideArticleMobile,
  [TemplatesNames.TitleMobile]: SlideTitleMobile,
  [TemplatesNames.FramePictMobile]: SlideFramePictMobile,
  [TemplatesNames.FrameVideoMobile]: SlideFrameVideoMobile,
  [TemplatesNames.NavMobile]: SlideNavMobile,
}
