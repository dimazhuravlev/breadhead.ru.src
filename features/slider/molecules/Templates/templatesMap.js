import SlidePictureDesktop from './desktopTemplates/SlidePictureDesktop'
import SlideVideoDesktop from './desktopTemplates/SlideVideoDesktop'
import SlideArticleDesktop from './desktopTemplates/SlideArticleDesktop'
import SlideFramePictDesktop from './desktopTemplates/SlideFramePictDesktop'
import SlideFrameVideoDesktop from './desktopTemplates/SlideFrameVideoDesktop'
import SlidePhonesDesktop from './desktopTemplates/SlidePhonesDesktop'
import SlideArticleWithPhoneDesktop from './desktopTemplates/SlideArticleWithPhoneDesktop'
import SlideNavDesktop from './desktopTemplates/SlideNavDesktop'

import SlidePictureMobile from './mobileTemplates/SlidePictureMobile'
import SlideVideoMobile from './mobileTemplates/SlideVideoMobile'
import SlideArticleMobile from './mobileTemplates/SlideArticleMobile'
import SlideFramePictMobile from './mobileTemplates/SlideFramePictMobile'
import SlideFrameVideoMobile from './mobileTemplates/SlideFrameVideoMobile'
import SlideNavMobile from './mobileTemplates/SlideNavMobile'

export const TemplatesNames = {
  PictureDesktop: 'pictureDesktop',
  VideoDesktop: 'videoDesktop',
  ArticleDesktop: 'articleDesktop',
  FramePictDesktop: 'framePictDesktop',
  FrameVideoDesktop: 'frameVideoDesktop',
  PhonesDesktop: 'phonesDesktop',
  ArticleWithPhoneDesktop: 'articleWithPhoneDesktop',
  NavDesktop: 'navDesktop',

  PictureMobile: 'pictureMobile',
  VideoMobile: 'videoMobile',
  ArticleMobile: 'articleMobile',
  FramePictMobile: 'framePictMobile',
  FrameVideoMobile: 'frameVideoMobile',
  NavMobile: 'navMobile'
}

export default {
  [TemplatesNames.PictureDesktop]: SlidePictureDesktop,
  [TemplatesNames.VideoDesktop]: SlideVideoDesktop,
  [TemplatesNames.ArticleDesktop]: SlideArticleDesktop,
  [TemplatesNames.FramePictDesktop]: SlideFramePictDesktop,
  [TemplatesNames.FrameVideoDesktop]: SlideFrameVideoDesktop,
  [TemplatesNames.PhonesDesktop]: SlidePhonesDesktop,
  [TemplatesNames.ArticleWithPhoneDesktop]: SlideArticleWithPhoneDesktop,
  [TemplatesNames.NavDesktop]: SlideNavDesktop,

  [TemplatesNames.PictureMobile]: SlidePictureMobile,
  [TemplatesNames.VideoMobile]: SlideVideoMobile,
  [TemplatesNames.ArticleMobile]: SlideArticleMobile,
  [TemplatesNames.FramePictMobile]: SlideFramePictMobile,
  [TemplatesNames.FrameVideoMobile]: SlideFrameVideoMobile,
  [TemplatesNames.NavMobile]: SlideNavMobile
}
