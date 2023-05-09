import React from "react"
import styles from "./styles/mainFooter.module.css"
import { useRouter } from "next/router"
import Image from "next/image"
import navbarImage from "../public/posticon.png"

function MainFooter() {
  const router = useRouter()

  const handleCreateButtonClick = () => {
    router.push("/createUser")
  }

  return (
    <div>
      <nav className={styles.main_footer}>
        <button type="submit" onClick={handleCreateButtonClick}>
          <Image
            src={navbarImage}
            alt=""
            width={64}
            height={64}
            className={styles.image_post}
          />
        </button>
      </nav>
    </div>
  )
}

export default MainFooter
