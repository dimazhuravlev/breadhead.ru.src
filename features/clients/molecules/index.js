import React from 'react'
import styles from './clientsList.css'

const ClientsList = ({ children }) => (
  <div className={styles.clientsList}>
    {React.children.map(children, child => (
      <div className={styles.client}>{child}</div>
    ))}
  </div>
)

export default ClientsList
