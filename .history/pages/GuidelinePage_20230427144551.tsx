import { NextPage } from "next"
import Image from "next/image"
import styles from "/p-components/styles/guidelinePage.module.css"
import guidelineOnion from "/public/guidelineOnion.png"

const GuidelinePage: NextPage = () => {
  return (
    <div className={styles.guidelinePage_body}>
      <div>
        <div className={styles.guidelinePage_Top}>
          <h1 className={styles.h1}>
            YAY! We're excited to have you onboard! {"<3"}
          </h1>
        </div>
        <div className={styles.onionImage}>
          <div className={styles.oniontext_div}>
            <h2 className={styles.onionText}>
              ...before we get started <br /> we want you to read our <br />{" "}
              guidelines
            </h2>
          </div>
          <Image src={guidelineOnion} alt={"Picture is unavailable"} />
        </div>
      </div>
    </div>
  )
}

export default GuidelinePage
