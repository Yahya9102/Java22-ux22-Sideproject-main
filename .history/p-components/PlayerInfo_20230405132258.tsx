import React from "react"
import styles from "./styles/playerInfo.module.css"

export interface PlayerInfoProps {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

function PlayerInfo({
  name,
  gamertag,
  games,
  discord,
  gender,
}: PlayerInfoProps): JSX.Element {
  return (
    <div>
      <table className={styles.player_info}>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Gamertag</th>
            <td>{gamertag}</td>
          </tr>
          <tr>
            <th>Games to play</th>
            <td>{games}</td>
          </tr>
          <tr>
            <th>Discord</th>
            <td>{discord}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlayerInfo
