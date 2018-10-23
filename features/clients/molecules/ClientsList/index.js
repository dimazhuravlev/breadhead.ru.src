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
  clients: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ClientsList
