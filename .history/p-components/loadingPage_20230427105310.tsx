import { NextPage } from "next"
import styles from "/p-components/styles/loadingPage.module.css"

import Image from "next/image"
import playercards from "/public/playercards.png"

const LoadingPage: NextPage = ({}) => {
  return (
    <div>
      <div className={styles.loadingPage_body}>
        <div className={styles.loadingPage_Top}>
          <h1 className={styles.h1}>Level up your friendships!</h1>
          <br />
          <p className={styles.p}>
            Here you can find your gamingfriends! Write a post and see what
            happens!
          </p>
          <br />
          <div className={styles.image_div}>
            <Image src={playercards} alt={"Picture is unavailable"} />
          </div>
          <br />

          <div className={styles.button_div}>
            <button className={styles.button}>Get started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
