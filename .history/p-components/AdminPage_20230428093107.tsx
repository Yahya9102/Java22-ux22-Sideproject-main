import { NextPage } from "next"
import styles from "p-components/styles/adminPage.module.css"
import { useEffect, useState } from "react"
import { User } from "@/types/users"
import router from "next/router"
import Breaks from "./breaks"

const admin: NextPage = ({}) => {
  const [users, setUsers] = useState<User[]>([])

  const ADMIN_USERNAME = "Admin"
  const ADMIN_PASSWORD = "12345"

  const [adminUsername, setAdminUsername] = useState("")
  const [adminPassword, setAdminPassword] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api")
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
        const response = await fetch(`/api/deleteUser?userId=${_id}`, {
          method: "DELETE",
        })
        if (!response.ok) {
          throw new Error("Failed to delete user")
        }
        router.reload()
      } catch (error) {
        console.error("Error deleting user:", error)
      }
    }
  }

  const [showForm, setShowForm] = useState(false)

  const handleChangeClick = async (_id: string) => {
    console.log("Testing")
    // setShowForm(true)
  }

  // A button for closing form for editing a post
  const handleChangeClose = () => {
    console.log("Testing")
    setShowForm(false)
  }

  const handleLoginClick = () => {
    if (adminUsername === ADMIN_USERNAME && adminPassword === ADMIN_PASSWORD) {
      setShowForm(true)
    } else {
      alert("Invalid admin username or password")
    }
  }

  return (
    <div>
      <div>
        <fieldset>
          <label htmlFor="adminUsername">Admin Username:</label>
          <br />
          <input
            type="text"
            name="adminUsername"
            id="adminUsername"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
            placeholder="Username"
          />

          <br />
          <label className={styles.label} htmlFor="adminPassword">
            Admin Password:
          </label>
          <br />
          <input
            className={styles.input}
            type="password"
            name="adminPassword"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="password"
          />
          <br />
          <button
            className={styles.createpost_button}
            onClick={handleLoginClick}
          >
            Login
          </button>
        </fieldset>
      </div>

      {showForm &&
        Array.isArray(users) &&
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
                      onClick={() => handleDeleteClick(user._id.toString())}
                      className={styles.createpost_button}
                    >
                      Delete
                    </button>
                    <button
                      className={styles.createpost_button}
                      onClick={() => handleChangeClick(user._id.toString())}
                    >
                      Edit
                    </button>
                    {/* {showForm && (
                  <div>
                    <div>
                      <h2>Edit existing post</h2>
                      <form>
                        <label htmlFor="editName">Change name:</label>
                        <br />
                        <input
                          type="text"
                          name="editName"
                          id="editName"
                          placeholder="You wanna change the name?"
                        />
                        <br />
                        <button type="submit">Change Post</button>
                      </form>
                      <button onClick={handleChangeClose}>X</button>
                    </div>
                  </div>
                )} */}
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        ))}
      <Breaks />
    </div>
  )
}

export default admin
