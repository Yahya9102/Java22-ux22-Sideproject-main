import React from "react"
import styles from "./styles/playerInfo.module.css"

function PlayerInfo() {
  return (
    <div>
      <table className={styles.player_info}>
        <tbody>
          <tr>
            <th className=" pl-7">Yahya</th>
          </tr>
          <tr>
            <td>Jag vill spela wow</td>
          </tr>
          <tr>
            <td>
              Jag vill sitta och spela 24 timmar om dygnet tills jag somnar
              framför datorn
            </td>
          </tr>

          <tr>
            <td>här är min discord</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlayerInfo
