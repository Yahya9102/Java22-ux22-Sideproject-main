import { NextPage } from "next"
import styles from "/@p-component/styles/loadingPage.module.css"
import { User } from "@/types/users"

const LoadingPage: NextPage<User> = ({}) => {
  return (
    <div>
      <div className={styles.loadingPage_body}></div>
    </div>
  )
}

export default LoadingPage
