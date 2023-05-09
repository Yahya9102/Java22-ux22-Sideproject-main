import { NextPage } from "next"
import styles from "/p-components/styles/loadingPage.module.css"
import createicon from "/public/createicon.png"
import connecticon from "/public/connecticon.png"
import exploreicon from "/public/exploreicon.png"
import Image from "next/image"
import playercards from "/public/playercards.png"
import router from "next/router"
import GuidelinePage from "../pages/GuidelinePage"

const LoadingPage: NextPage = ({}) => {
  const redirectToGuideline = () => {
    router.push("/GuidelinePage")
  }

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
        <div className={styles.image_div}>
          <Image src={playercards} alt={"Picture is unavailable"} />
        </div>
        <br />
        <div>
          <div className={styles.icons}>
            <Image src={createicon} alt={"Picture is unavailable"} />
            <h3 className={styles.h3}> Create a post</h3>
          </div>
          <div className={styles.icons}>
            <Image src={exploreicon} alt={"Picture is unavailable"} />
            <h3 className={styles.h3}> Explore finding new friends</h3>
          </div>
          <div className={styles.icons}>
            <Image src={connecticon} alt={"Picture is unavailable"} />
            <h3 className={styles.h3}> Start Connecting</h3>
          </div>
        </div>
        <div className={styles.button_div}>
          <button onClick={redirectToGuideline} className={styles.button}>
            Get started!
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
