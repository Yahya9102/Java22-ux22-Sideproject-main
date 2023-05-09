import React from "react"
import styles from "./styles/playerInfo.module.css"

function PlayerInfo() {
  return (
    <div className="player_info">
      <table className={styles.player_info}>
        <tbody>
          <tr>
            <th className=" pl-7"></th>
          </tr>
          <tr>
            <td>Language1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlayerInfo
