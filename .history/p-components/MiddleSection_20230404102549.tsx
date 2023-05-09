import React from "react"
import styles from "./styles/middleSection.module.css"
import PlayerInfo from "./PlayerInfo"

function MiddleSection() {
  return (
    <div className={styles.middle_section}>
      <div className=" mt-1"></div>


        <PlayerInfo />
      </div>
    </div>
  )
}

export default MiddleSection
