import { NextPage } from "next"
import styles from "/p-components/styles/loadingPage.module.css"

const LoadingPage: NextPage = ({}) => {
  return (
    <div>
      <div className={styles.loadingPage_body}></div>
    </div>
  )
}

export default LoadingPage
