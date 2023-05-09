import { NextPage } from "next"
import styles from "/p-component/styles/loadingPage.module.css"

const LoadingPage: NextPage = ({}) => {
  return (
    <div>
      <div className={styles.loadingPage_body}>Hej</div>
    </div>
  )
}

export default LoadingPage
