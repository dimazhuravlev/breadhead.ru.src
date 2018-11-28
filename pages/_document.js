import Document, { Head, Main, NextScript } from 'next/document'
import { getHTML } from '@site/features/googleAnalytics'
import resolveStaticSrc from '@site/features/slider/molecules/VideoPlayer/resolveStaticSrc'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="title"
            content="Breadhead – разработка цифровых сервисов"
          />
          <meta
            name="description"
            content="Проектируем и выпускаем сервисы и приложения: e-commerce, образовательные продукты, службы бронирования и доставки, инструменты автоматизации, медиа."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://breadhead.ru/" />
          <meta
            property="og:title"
            content="Breadhead – разработка цифровых сервисов"
          />
          <meta
            property="og:description"
            content="Проектируем и выпускаем сервисы и приложения: e-commerce, образовательные продукты, службы бронирования и доставки, инструменты автоматизации, медиа."
          />
          <meta
            property="og:image"
            content="https://breadhead.ru/static/img/bh_title.jpg"
          />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="ru_RU" />
          <meta property="og:site_name" content="breadhead.ru" />
          <meta property="fb:app_id" content="306467899461953" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://breadhead.ru/static/img/bh_title.jpg"
          />
          <meta
            property="twitter:title"
            content="Breadhead – разработка цифровых сервисов"
          />
          <meta
            property="twitter:description"
            content="Проектируем и выпускаем сервисы и приложения: e-commerce, образовательные продукты, службы бронирования и доставки, инструменты автоматизации, медиа."
          />
          <meta
            property="twitter:image"
            content="https://breadhead.ru/static/img/bh_title.jpg"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: getHTML(),
            }}
          />
          {/* TODO: replace it with automatically generated content */}
          {/* faster-desktop */}
          <link
            rel="preload"
            as="video"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('faster/desktop/full_order_desktop.mp4')}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('faster/desktop/phone_map_desktop.jpg')}
          />
          <link
            rel="preload"
            as="video"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('faster/desktop/browser_scroll_desktop.mp4')}
          />
          {/* yango-desktop */}
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/cover_desktop_fullslide.jpg')}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/0_desktop.jpg')}
          />
          <link
            rel="preload"
            as="video"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/1.2_desktop.mp4')}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/1.1_desktop.jpg')}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/1.3_desktop.jpg')}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/2.3_desktop.jpg')}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/2.1_desktop.jpg')}
          />
          <link
            rel="preload"
            as="video"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/2.2_desktop.mp4')}
          />
          <link
            rel="preload"
            as="video"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc('yango/desktop/2.2_desktop.mp4')}
          />

          {/* encore-desktop */}
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc(
              'encore_fitness/desktop/cover_encore_desktop_fullslide.jpg'
            )}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (min-width:1025px)"
            href={resolveStaticSrc(
              'encore_fitness/desktop/1-main_encore_desktop.jpg'
            )}
          />

          {/* faster-mobile */}
          <link
            rel="preload"
            as="video"
            media="only screen and (max-width:1024px)"
            href={resolveStaticSrc('faster/mobile/scroll_mobile.mp4')}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (max-width:1024px)"
            href={resolveStaticSrc('faster/mobile/phone_map_mobile.jpg')}
          />

          {/* yango-mobile */}
          <link
            rel="preload"
            as="image"
            media="only screen and (max-width:1024px)"
            href={resolveStaticSrc('yango/mobile/cover_mobile_fullslide.jpg')}
          />
          <link
            rel="preload"
            as="video"
            media="only screen and (max-width:1024px)"
            href={resolveStaticSrc('yango/mobile/1_mobile.mp4')}
          />

          {/* encore-mobile */}
          <link
            rel="preload"
            as="image"
            media="only screen and (max-width:1024px)"
            href={resolveStaticSrc(
              'encore_fitness/mobile/cover_encore_mobile_fullslide.jpg'
            )}
          />
          <link
            rel="preload"
            as="image"
            media="only screen and (max-width:1024px)"
            href={resolveStaticSrc(
              'encore_fitness/mobile/1-main_encore_mobile.jpg'
            )}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="apple-mobile-web-app-title" content="Breadhead" />
          <meta name="application-name" content="Breadhead" />
          <meta name="msapplication-TileColor" content="#b91d47" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial=scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
