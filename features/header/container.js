import React from 'react'

import { i18n } from '@site/lib/i18n'

import revertLang from './utils/revertLang'

const Container = (Component) =>
  class extends React.Component {
    toggleLang = () =>
      i18n.changeLanguage(revertLang(i18n.language))

    render() {
      return (
        <Component
          lang={revertLang(i18n.language)}
          toggleLang={this.toggleLang}
        />
      )
    }
  }

export default Container
