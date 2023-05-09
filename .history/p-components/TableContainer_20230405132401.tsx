import React from "react"
import PlayerInfo, { PlayerInfoProps } from "./PlayerInfo"
import styles from "./styles/tableContainer.module.css"

function TableContainer() {
  const playerInfoProps: PlayerInfoProps = {
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "Male",
  }

  return (
    <div className={styles.table_container}>
      <PlayerInfo {...playerInfoProps} />
    </div>
  )
}

export default TableContainer
