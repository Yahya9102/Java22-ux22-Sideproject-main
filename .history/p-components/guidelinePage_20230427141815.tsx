import { NextPage } from "next"
import Image from "next/image"
import styles from "/p-components/styles/guidelinePage.module.css"

const GuidelinePage: NextPage = () => {
  return (
    <div className={styles.loadingPage_body}>
      <div className={styles.loadingPage_Top}>
        <h1 className={styles.h1}>Level up your friendships!</h1>
        <br />
        <p className={styles.p}>
          Here you can find your gamingfriends! Write a post and see what
          happens!
        </p>
        <br />
        <div className={styles.image_div}></div>
        <br />
        <div>
          <div className={styles.icons}>
            <h3 className={styles.h3}> Create a post</h3>
          </div>
          <div className={styles.icons}>
            <h3 className={styles.h3}> Explore finding new friends</h3>
          </div>
          <div className={styles.icons}>
            <h3 className={styles.h3}> Start Connecting</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuidelinePage
