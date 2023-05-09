import { NextPage } from "next"
import styles from "p-components/styles/playerInfo.module.css"
import { useEffect, useState } from "react"
import { User } from "@/types/users"
//import Image from "next/image"
//import heartimage from "../public/heartimage.png"

interface Props {}

const Body: NextPage<Props> = ({}) => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/")
        const data = await response.json()
        if (Array.isArray(data)) {
          setUsers(data)
        } else {
          console.log("Data is not an array:", data)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {Array.isArray(users) &&
        users.map((user) => (
          <fieldset className={styles.fieldset_body} key={user.name}>
            <table>
              <thead>
                <tr>
                  <th className={styles.tableHeader_PlayerInfo}>
                    {user.name}
                    <h6 className={styles.user_location}> {user.location}</h6>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <h2 className={styles.playerInfo_h2_title}>{user.title}</h2>
                    <br />
                    <p> {user.post}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <nav>
                        <br />
                        <h2 className={styles.playerInfo_h2}>Contact</h2>
                        <br />
                        <a href="https://discord.com/">
                          <p className={styles.playerInfo_p}>
                            {" "}
                            <strong> Discord:</strong> {user.discord}
                          </p>
                        </a>
                      </nav>
                    </div>
                  </td>
                </tr>
                {/**   <tr>
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
        ))}
    </div>
  )
}

export default Body
