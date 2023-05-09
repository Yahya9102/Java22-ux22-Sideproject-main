import React, { useState, useEffect } from "react"
import styles from "./styles/playerInfo.module.css"
import { MongoClient } from "mongodb"

interface User {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

function PlayerInfo() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const client = new MongoClient("mongodb://localhost:27017")
      await client.connect()
      const db = client.db("GameMatch")
      const collection = db.collection("users")
      const data = await collection.find().toArray()
      const users = data.map((document) => {
        const { name, gamertag, games, discord, gender } = document
        return { name, gamertag, games, discord, gender }
      })
      setUsers(users)
      await client.close()
    }
    fetchData()
  }, [])

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
          {users.map((user) => (
            <tr key={user.gamertag}>
              <td>{user.name}</td>
              <td>{user.gamertag}</td>
              <td>{user.games}</td>
              <td>{user.discord}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayerInfo
