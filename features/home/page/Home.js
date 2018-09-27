import Header from '@site/features/header'
import Headline from '@site/features/headline'
import Case from '@site/features/case'
import * as styles from './home.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Headline />
      <Case />
      <Case />
      <Case />
    </div>
  )
}

export default Home
