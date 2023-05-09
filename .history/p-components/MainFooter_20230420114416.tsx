import React from "react"
import styles from "./styles/mainFooter.module.css"

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
            <img
              src="./Group8.png"
              alt=""
              className={styles.image_background}
            />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default MainFooter
