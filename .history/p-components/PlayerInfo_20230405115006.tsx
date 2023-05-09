import React from "react"
import PlayerInfo, { PlayerInfoProps } from "./PlayerInfo"
import styles from "./styles/middleSection.module.css"

function MiddleSection() {
  const playerInfoProps: PlayerInfoProps = {
    name: "John Doe",
    gamertag: "johndoe123",
    games: "Call of Duty, Minecraft",
    discord: "johndoe#1234",
    gender: "Male",
  }

  return (
    <div className={styles.middle_section}>
      <div className={styles.table_container}>
        <PlayerInfo {...playerInfoProps} />
      </div>
    </div>
  )
}

export default MiddleSection
