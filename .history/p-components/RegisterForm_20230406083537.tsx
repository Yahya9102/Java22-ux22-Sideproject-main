import React, { useState } from "react"
import styles from "./styles/registerForm.module.css"
import { MongoClient } from "mongodb"

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("")
  const [gamertag, setGamertag] = useState("")
  const [games, setGames] = useState("")
  const [discord, setDiscord] = useState("")
  const [gender, setGender] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const client = new MongoClient("mongodb://localhost:27017")
    await client.connect()

    const db = client.db("GameMatch")
    const collection = db.collection("Users")

    const user = { name, gamertag, games, discord, gender }
    await collection.insertOne(user)

    await client.close()

    console.log(name, gamertag, games, discord, gender)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="gamertag">Gamertag</label>
          <br />
          <input
            type="text"
            name="gamertag"
            id="gamertag"
            value={gamertag}
            onChange={(event) => setGamertag(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="games">Games to play</label>
          <br />
          <input
            type="text"
            name="games"
            id="games"
            value={games}
            onChange={(event) => setGames(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="discord">Discord</label>
          <br />
          <input
            type="text"
            name="discord"
            id="discord"
            value={discord}
            onChange={(event) => setDiscord(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender</label>
          <br />
          <input
            type="text"
            name="gender"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
          <br />
          <br />
          <button type="submit" className=" rounded-md px-2 py-1 bg-slate-400">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default RegisterForm
