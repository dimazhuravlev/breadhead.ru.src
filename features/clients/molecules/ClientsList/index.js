import React from 'react'
import PropTypes from 'prop-types'
import styles from './clientsList.css'

const ClientsList = ({ clients }) => (
  <div className={styles.clientsList}>
    {clients.map(client => (
      <div key={client} className={styles.client}>
        {client}
      </div>
    ))}
  </div>
)

ClientsList.propTypes = {
  client: PropTypes.array
}

export default ClientsList
