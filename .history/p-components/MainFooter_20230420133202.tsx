import React from "react"
import styles from "./styles/mainFooter.module.css"
import { useRouter } from "next/router"

function MainFooter() {
  const router = useRouter()

  const handleCreateButtonClick = () => {
    router.push("/createUser.tsx")
  }

  return (
    <div className={styles.footer_body}>
      <footer className={styles.main_footer}>
        <div className={styles.footer_button}>
          <button type="submit" onClick={handleCreateButtonClick}>
            <img src="./Post icon.png" alt="" className={styles.image_post} />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default MainFooter
