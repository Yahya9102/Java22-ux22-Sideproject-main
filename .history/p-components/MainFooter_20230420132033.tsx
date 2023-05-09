import React from "react"
import styles from "./styles/mainFooter.module.css"
import CreatePost from "./CreatePost"

function MainFooter() {
  return (
    <div className={styles.footer_body}>
      <footer className={styles.main_footer}>
        <div className={styles.footer_button}>
          <button
            type="submit"
            onClick={() => {
              console.log("Click")
            }}
          >
            <img src="./Post icon.png" alt="" className={styles.image_post} />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default MainFooter
