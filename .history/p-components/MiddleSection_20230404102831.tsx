import React from "react"
import styles from "./styles/middleSection.module.css"
import PlayerInfo from "./PlayerInfo"

function MiddleSection() {
  return (
    <div className={styles.middle_section}>
      <div className={styles.table_container}>
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
      </div>
    </div>
  )
}

export default MiddleSection
