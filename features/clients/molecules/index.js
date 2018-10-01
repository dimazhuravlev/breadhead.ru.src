import React from 'react'
import styles from './clientsList.css'

const ClientsList = props => (
  <div className={styles.clientsList}>
    <div className={styles.client}>{props.name1}</div>
    <div className={styles.client}>{props.name2}</div>
    <div className={styles.client}>{props.name3}</div>
    <div className={styles.client}>{props.name4}</div>
  </div>
)

export default ClientsList
