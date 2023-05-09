import { NextPage } from "next"
import style from "p-components/styles/adminPage.module.css"
import { useEffect, useState } from "react"
import { User } from "@/types/users"
import router from "next/router"
import Breaks from "./breaks"
import styles from "p-components/styles/playerInfo.module.css"
import withAdminAuth from "./withAdminAuth"

const AdminPage: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("isAdminLoggedIn") === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const handleEditButtonClick = (user: User) => {
    setSelectedUser(user)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api")
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

  const handleDeleteClick = async (id: string) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this user?"
    )
    console.log(id)
    if (shouldDelete) {
      try {
        const response = await fetch(`/api/deleteUser?id=${id}`, {
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

  const [editValues, setEditValues] = useState({
    id: "",
    name: "",
    location: "",
    title: "",
    post: "",
    discord: "",
  })

  const handleChangeClick = async (user: User) => {
    setEditValues({
      id: user._id,
      name: user.name,
      location: user.location,
      title: user.title,
      post: user.post,
      discord: user.discord,
    })
  }
  const handleEditSubmit = async (_id: string, user: User) => {
    console.log(_id)
    try {
      const { name, location, title, post, discord } = editValues

      // Create an object with only the new values
      const userToUpdate: Partial<User> = {}
      if (name) userToUpdate.name = name
      if (location) userToUpdate.location = location
      if (title) userToUpdate.title = title
      if (post) userToUpdate.post = post
      if (discord) userToUpdate.discord = discord

      const response = await fetch(
        `http://localhost:3000/api/editUser?id=${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userToUpdate),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to edit user")
      }

      setSelectedUser(null)
      router.reload()
    } catch (error) {
      console.error("Error editing user:", error)
    }
  }

  return (
    <div>
      {Array.isArray(users) &&
        users.map((user) => (
          <fieldset
            className={style.fieldset_body}
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
                {editValues.id === user._id ? (
                  <>
                    <tr>
                      <td>
                        <br />
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={editValues.name}
                          onChange={(e) =>
                            setEditValues({
                              ...editValues,
                              name: e.target.value,
                            })
                          }
                          className={style.input_fields}
                        />
                        <h6 className={styles.user_location}>
                          <label htmlFor="location">Location</label> <br />
                          <input
                            type="text"
                            name="location"
                            id="location"
                            value={editValues.location}
                            onChange={(e) =>
                              setEditValues({
                                ...editValues,
                                location: e.target.value,
                              })
                            }
                            className={style.input_fields}
                          />
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="title">Title</label>
                        <br />
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={editValues.title}
                          onChange={(e) =>
                            setEditValues({
                              ...editValues,
                              title: e.target.value,
                            })
                          }
                          className={style.input_fields}
                        />
                        <br />
                        <textarea
                          name="post"
                          id="post"
                          value={editValues.post}
                          onChange={(e) =>
                            setEditValues({
                              ...editValues,
                              post: e.target.value,
                            })
                          }
                          className={style.input_fields}
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <nav>
                            <br />
                            <h2 className={styles.playerInfo_h2}>Contact</h2>
                            <br />
                            <label htmlFor="discord">Discord</label>
                            <br />
                            <input
                              type="text"
                              name="discord"
                              id="discord"
                              value={editValues.discord}
                              onChange={(e) =>
                                setEditValues({
                                  ...editValues,
                                  discord: e.target.value,
                                })
                              }
                              className={style.input_fields}
                            />
                          </nav>
                        </div>
                      </td>
                    </tr>
                  </>
                ) : null}
                <tr>
                  <td>
                    <p>ID: {JSON.stringify(user._id)}</p>
                    <button
                      onClick={() => handleDeleteClick(user._id.toString())}
                      className={style.createpost_button}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleChangeClick(user)}
                      className={style.createpost_button}
                    >
                      Edit
                    </button>
                    {editValues.id === user._id && (
                      <button
                        className={style.createpost_button}
                        onClick={() =>
                          handleEditSubmit(user._id.toString(), user)
                        }
                      >
                        Save Changes
                      </button>
                    )}
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

export default withAdminAuth(AdminPage)
