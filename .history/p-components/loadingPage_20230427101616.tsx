import { NextPage } from "next"
import styles from "/p-components/styles/loadingPage.module.css"

const LoadingPage: NextPage = ({}) => {
  return (
    <div>
      <div className={styles.loadingPage_body}>
        <div className={styles.loadingPage_Top}>
          <h1 className={styles.h1}>Level up your friendships!</h1>
          <br />
          <p>
            Here you can find your gamingfriends! Write a post and see what
            happens!
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
