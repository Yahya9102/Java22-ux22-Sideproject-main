import React, { useState } from "react"
import styles from "./styles/playerInfo.module.css"
import RegisterForm from "./RegisterForm"

interface User {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

function PlayerInfo() {
  const [user, setUser] = useState<User>({
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "",
  })

  return (
    <div>
      <table className={styles.player_info}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gamertag</th>
            <th>Games</th>
            <th>Discord</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.gamertag}</td>
            <td>{user.games}</td>
            <td>{user.discord}</td>
            <td>{user.gender}</td>
          </tr>
        </tbody>
      </table>
      <RegisterForm user={user} setUser={setUser} />
    </div>
  )
}

export default PlayerInfo
