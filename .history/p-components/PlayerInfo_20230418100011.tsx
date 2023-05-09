import { NextPage } from "next"
import styles from "p-components/styles/playerInfo.module.css"
import Image from "next/image"
import heartimage from "../public/heartimage.png"
import { useState, useEffect } from "react"
import mongodb, { MongoClient } from "mongodb"

interface User {
  _id: string
  title: string
  name: string
  infoPost: string
  discord: string
}

interface Props {}

const Body: NextPage<Props> = ({}) => {
  const [users, setUsers] = useState<User[]>([])

  /*
  const getUsers = async () => {
    const client = new MongoClient("mongodb://localhost:27017")
    try {
      await client.connect()
      const db = client.db("GameMatch")
      const documents = await db.collection("users").find().toArray()
      const users = documents.map((doc) => ({
        _id: doc._id.toString(),
        title: doc.title,
        name: doc.name,
        infoPost: doc.infoPost,
        discord: doc.discord,
      }))
      setUsers(users)
    } catch (error) {
      console.error(error)
    } finally {
      await client.close()
    }
  }

  useEffect(() => {
    getUsers()
  }, [])


  */
  return (
    <div>
      <fieldset className={styles.fieldset_body}>
        <table>
          <thead>
            <tr>
              <th className={styles.tableHeader_PlayerInfo}>NovaStorm93</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <fieldset className={styles.fieldset_row}>
                    <h2 className={styles.playerInfo_h2}>{user.title}</h2>
                    <br />
                    <p>{user.infoPost}</p>
                  </fieldset>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <div>
                  <nav>
                    <br />
                    <h2 className={styles.playerInfo_h2}>
                      <strong>Contact</strong>
                    </h2>{" "}
                    <br />
                    <a href={`https://discord.com/${users[0]?.discord}`}>
                      <strong>Discord</strong>
                    </a>
                    <br />
                    <a href="https://store.steampowered.com//">
                      {" "}
                      <strong>Steam</strong>
                    </a>
                  </nav>
                </div>
              </td>
            </tr>
            {/* <tr>
              <td>
                <div className={styles.table_button_wrapper}>
                  <Image
                    src={heartimage}
                    className={styles.heartimage}
                    alt="Heart icon"
                  />
                  <button className={styles.table_button}>Reply</button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </fieldset>
    </div>
  )
}

export default Body
