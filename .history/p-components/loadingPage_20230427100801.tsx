import { NextPage } from "next"
import styles from "/p-components/styles/loadingPage.module.css"

const LoadingPage: NextPage = ({}) => {
  return (
    <div>
      <div className={styles.loadingPage_body}>
        <div>
          <h1>Level up with your friends</h1>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
