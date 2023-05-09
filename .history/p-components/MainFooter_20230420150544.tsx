import React from "react"
import styles from "./styles/mainFooter.module.css"
import { useRouter } from "next/router"

function MainFooter() {
  const router = useRouter()

  const handleCreateButtonClick = () => {
    router.push("/createUser")
  }

  return (
    <div className=" mt-60">
      <footer className={styles.main_footer}>
        <button type="submit" onClick={handleCreateButtonClick}>
          <img src="./Post icon.png" alt="" className={styles.image_post} />
        </button>
      </footer>
    </div>
  )
}

export default MainFooter
