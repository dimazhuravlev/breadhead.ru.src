import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import { clientsData } from '@site/data/clientsData'
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
    return (
      <VisibilitySensor
        onChange={isVisible => {
          !this.state.isVisible && isVisible && this.setState({ isVisible })
        }}
        partialVisibility
        delayedCall
        offset={{ bottom: 40 }}
      >
        <section
          className={cx(
            styles.clients,
            this.state.isVisible ? styles.visible : styles.inVisible
          )}
        >
          <Descriptor className={styles.caseNameOnly} name="Клиенты" />
          <ClientsList clients={clientsData} />
        </section>
      </VisibilitySensor>
    )
  }
}

export default Clients
