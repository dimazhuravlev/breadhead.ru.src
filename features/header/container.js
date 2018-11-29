import React from 'react'

import i18n from '@site/lib/i18n/i18n'

const Container = (Component) =>
  class extends React.Component {
    toggleLang = () => i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')

    render() {
      return (
        <Component
          lang={i18n.language}
          toggleLang={this.toggleLang}
        />
      )
    }
  }

export default Container
