import React from 'react'
import { scroller } from 'react-scroll'

import Case from '@site/features/case'
import Button from '@site/ui/molecules/Button'
import { PlusIcon } from '@site/ui/atoms/icons'
import { MinusIcon } from '@site/ui/atoms/icons'
import { casesDataDesktop } from '@site/data/casesDataDesktop'
import { casesDataMobile } from '@site/data/casesDataMobile'

import styles from './cases.css'
import cx from 'classnames'

class Cases extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
      isScroll: false,
      textBtn: 'ещё',
      iconBtn: <PlusIcon />
    }
    this.handleClick = this.handleClick.bind(this)
    this.scrollToButton = this.scrollToButton.bind(this)
  }

  scrollToButton() {
    scroller.scrollTo('buttonToShow', {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  handleClick() {
    this.setState(state => ({
      isScroll: state.isShown ? this.scrollToButton() : false,
      isShown: !state.isShown,
      textBtn: state.textBtn === 'ещё' ? 'свернуть' : 'ещё',
      iconBtn: state.iconBtn === <PlusIcon /> ? <MinusIcon /> : <PlusIcon />
    }))
  }

  render() {
    const allCasesDesktop = casesDataDesktop.map(caseData => (
      <Case key={caseData.description.name} {...caseData} />
    ))

    const allCasesMobile = casesDataMobile.map(caseData => (
      <Case key={caseData.description.name} {...caseData} />
    ))

    const firstShowCasesDesktop = allCasesDesktop.slice(0, 3)
    const firstShowCasesMobile = allCasesMobile.slice(0, 3)

    return (
      <>
        <section className={cx(styles.cases, styles.desktopCases)} name="cases">
          {this.state.isShown ? allCasesDesktop : firstShowCasesDesktop}
        </section>

        <section className={cx(styles.cases, styles.mobileCases)} name="cases">
          {this.state.isShown ? allCasesMobile : firstShowCasesMobile}
        </section>

        <Button
          name="buttonToShow"
          onClick={this.handleClick}
          className={styles.plusButton}
          icon={this.state.iconBtn}
        >
          {this.state.textBtn}
        </Button>
      </>
    )
  }
}

export default Cases
