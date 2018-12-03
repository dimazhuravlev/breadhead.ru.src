import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { withNamespaces } from '@site/lib/i18n'
import Descriptor from '@site/features/descriptor'
import ClientsList from '../../molecules/ClientsList'
import styles from './clients.css'
import cx from 'classnames'

class Clients extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  render() {
    const { t } = this.props

    // console.log(this.props)

    return (
      <VisibilitySensor
        onChange={isVisible => {
          !this.state.isVisible && isVisible && this.setState({ isVisible })
        }}
        partialVisibility
        delayedCall
      >
        <section
          name={this.props.name}
          className={cx(
            styles.clients,
            this.state.isVisible ? styles.visible : styles.inVisible
          )}
        >
          <Descriptor
            className={styles.caseNameOnly}
            name={t('clients-title')}
          />
          <ClientsList clients={this.props.clientsData} />
        </section>
      </VisibilitySensor>
    )
  }
}

export default withNamespaces(['common'])(Clients)
