import React from "react"
import styles from "./styles/leftSection.module.css"
import RegisterForm from "./RegisterForm"

function LeftSection() {
  return (
    <div className={styles.left_section}>
      <div className={styles.navbar_matchside}>
        <RegisterForm />
      </div>
    </div>
  )
}

export default LeftSection
