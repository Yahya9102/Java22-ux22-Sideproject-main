import { NextPage } from "next"
import Image from "next/image"
import styles from "/p-components/styles/guidelinePage.module.css"

const GuidelinePage: NextPage = () => {
  return (
    <div className={styles.guidelinePage_body}>
      <div>
        <div className={styles.guidelinePage_Top}>
          <h1 className={styles.h1}>
            YAY! We're excited to have you onboard! {"<3"}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default GuidelinePage
