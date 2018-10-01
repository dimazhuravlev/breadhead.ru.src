import React from 'react'
import ClientsList from '../../molecules'
import Descriptor from '@site/features/descriptor'
import styles from './clients.css'

const Clients = () => (
  <div className={styles.clients}>
    <Descriptor casename="Клиенты" />
    <div className={styles.clientsLists}>
      <ClientsList
        name1="Яндекс"
        name2="ВТБ"
        name3="Look at Media"
        name4="Филармония"
      />
      <ClientsList
        name1="Encore Fitness"
        name2="Yami Yami"
        name3="Ginza Project"
        name4="Great Simple"
      />
      <ClientsList
        name1="PYE"
        name2="TRA Robotics"
        name3="Artdocfest"
        name4="London Calling"
      />
    </div>
  </div>
)

export default Clients
