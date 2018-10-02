import React from 'react'
import Descriptor from '@site/features/descriptor'
import styles from './clients.css'

const clients = [
  'Яндекс',
  'ВТБ',
  'Look at Media',
  'Филармония',
  'Encore Fitness',
  'Yami Yami',
  'Ginza Project',
  'Great Simple',
  'PYE',
  'TRA Robotics',
  'Artdocfest',
  'London Calling'
]

const Clients = () => {
  return (
    <div className={styles.clients}>
      <Descriptor casename="Клиенты" />
      <div className={styles.clientsList}>
        {clients.map(client => (
          <div key={client} className={styles.client}>
            {client}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
