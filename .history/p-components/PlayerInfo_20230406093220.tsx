import React, { useState, useEffect } from "react"
import styles from "./styles/playerInfo.module.css"
import mongoose from "mongoose"

interface User {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

// Define a schema for the documents in the collection
const userSchema = new mongoose.Schema<User>({
  name: String,
  gamertag: String,
  games: String,
  discord: String,
  gender: String,
})

// Create a model for the collection using the schema
const User = mongoose.model<User>("User", userSchema)

function PlayerInfo() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function fetchData() {
      // Connect to the MongoDB server using Mongoose
      await mongoose.connect("mongodb://localhost:27017")

      console.log("Connected to MongoDB server")

      try {
        // Fetch all documents from the "users" collection
        const data = await User.find().exec()
        setUsers(data)
        console.log("Fetched documents:", data)
      } catch (error) {
        console.error("Error fetching documents from MongoDB:", error)
      } finally {
        // Disconnect from the MongoDB server
        await mongoose.disconnect()
      }
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
