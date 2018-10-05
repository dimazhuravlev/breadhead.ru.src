import React from 'react'
import Descriptor from '@site/features/descriptor'
import ClientsList from '../../molecules/ClientsList'
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

const Clients = () => (
  <section className={styles.clients}>
    <Descriptor className={styles.caseNameOnly} casename="Клиенты" />
    <ClientsList clients={clients} />
  </section>
)

export default Clients
