import { NextPage } from "next"
import styles from "/p-components/styles/loadingPage.module.css"

const LoadingPage: NextPage = ({}) => {
  return (
    <div>
      <div className={styles.loadingPage_body}>
        <div className={styles.loadingPage_Top}>
          <h1>Level up your friendships!</h1>
          <p>
            Here you can find your gamingfriends! Write a post and see what
            happens Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias, consectetur, inventore fugit corrupti nulla voluptates ea
            omnis magni ullam, repellat adipisci perspiciatis voluptate hic.
            Corporis illum perferendis qui eius porro.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
