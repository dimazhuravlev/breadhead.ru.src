import React from 'react'
import { clientsData } from '@site/data/clientsData'
import Descriptor from '@site/features/descriptor'
import ClientsList from '../../molecules/ClientsList'
import styles from './clients.css'

const Clients = () => (
  <section className={styles.clients}>
    <Descriptor className={styles.caseNameOnly} name="Клиенты" />
    <ClientsList clients={clientsData} />
  </section>
)

export default Clients
