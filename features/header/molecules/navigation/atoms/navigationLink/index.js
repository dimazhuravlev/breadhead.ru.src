import * as styles from './navigationLink.css'

const NavigationLink = props => {
  return <a className={styles.NavigationLink}>{props.link}</a>
}

export default NavigationLink
