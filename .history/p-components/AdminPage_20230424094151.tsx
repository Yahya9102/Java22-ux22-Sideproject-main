import { NextPage } from "next"
import styles from "p-components/styles/playerInfo.module.css"
import { useEffect, useState } from "react"
import { User } from "@/types/users"
import router from "next/router"

const Body: NextPage = ({}) => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/")
        const data = await response.json()
        if (Array.isArray(data)) {
          setUsers(data)
          console.log(data)
        } else {
          console.log("Data is not an array:", data)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async (_id: string) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this user?"
    )
    console.log(_id)
    if (shouldDelete) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/deleteUser/${_id}`,
          {
            method: "DELETE",
          }
        )
        if (!response.ok) {
          throw new Error("Failed to delete user")
        }
        router.reload()
      } catch (error) {
        console.error("Error deleting user:", error)
      }
    }
  }

  return (
    <div>
      {Array.isArray(users) &&
        users.map((user) => (
          <fieldset
            className={styles.fieldset_body}
            key={JSON.stringify(user._id)}
          >
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
                    <p className={styles.playerInfo_p}> {user.post}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <nav>
                        <br />
                        <h2 className={styles.playerInfo_h2}>Contact</h2>
                        <br />
                        <a
                          href={`discord://discordapp.com/users/${user.discord}`}
                        >
                          <p className={styles.playerInfo_p}>
                            <strong>Discord:</strong> {user.discord}
                          </p>
                        </a>
                      </nav>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>ID: {JSON.stringify(user._id)}</p>
                    <button
                      onClick={() =>
                        handleDeleteClick(Buffer.from(user._id).toString("hex"))
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        ))}
    </div>
  )
}

export default Body
