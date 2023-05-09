import React from "react"
import styles from "./styles/middleSection.module.css"

function MiddleSection(props: React.PropsWithChildren<{}>) {
  return (
    <div className={styles.middle_section}>
      <div className={styles.table_container}>{props.children}</div>
    </div>
  )
}

export default MiddleSection
