import { NextPage } from "next"
import style from "p-components/styles/adminPage.module.css"
import { useEffect, useState } from "react"
import { User } from "@/types/users"
import router from "next/router"
import Breaks from "./breaks"
import styles from "p-components/styles/playerInfo.module.css"

const AdminPage: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)

  const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: "",
  })

  const handleLoginClick = () => {
    if (
      adminCredentials.username === ADMIN_USERNAME &&
      adminCredentials.password === ADMIN_PASSWORD
    ) {
      setShowForm(true)
      hideLoging()
    } else {
      alert("Invalid admin username or password")
    }
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

      console.log(_id)
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
      setSelectedCardId(null)

      router.reload()
    } catch (error) {
      console.error("Error editing user:", error)
    }
  }

  return (
    <div>
      {showLogin && (
        <div>
          <fieldset>
            <label htmlFor="adminUsername">Admin Username:</label>
            <br />
            <input
              className={style.input_fields}
              type="text"
              name="adminUsername"
              id="adminUsername"
              value={adminCredentials.username}
              onChange={(e) =>
                setAdminCredentials({
                  ...adminCredentials,
                  username: e.target.value,
                })
              }
              placeholder="Username"
            />

            <br />
            <label className={style.label} htmlFor="adminPassword">
              Admin Password:
            </label>
            <br />
            <input
              className={style.input_fields}
              type="password"
              name="adminPassword"
              id="adminPassword"
              value={adminCredentials.password}
              onChange={(e) =>
                setAdminCredentials({
                  ...adminCredentials,
                  password: e.target.value,
                })
              }
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
      )}

      {showForm &&
        Array.isArray(users) &&
        users.map((user, index) => {
          const [editValues, setEditValues] = useState<User>({
            ...user,
            _id: user._id.toString(),
          })
          const [isEditing, setIsEditing] = useState(false)

          const handleEditClick = () => {
            setIsEditing(true)
          }

          const handleEditCancelClick = () => {
            setIsEditing(false)
          }

          const handleEditSaveClick = async () => {
            try {
              const response = await fetch(
                `/api/editUser?id=${editValues._id}`,
                {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(editValues),
                }
              )

              if (!response.ok) {
                throw new Error("Failed to edit user")
              }
              setIsEditing(false)
              router.reload()
            } catch (error) {
              console.error("Error editing user:", error)
            }
          }

          const handleDeleteClick = async () => {
            const shouldDelete = window.confirm(
              "Are you sure you want to delete this user?"
            )

            if (shouldDelete) {
              try {
                const response = await fetch(`/api/deleteUser?id=${user._id}`, {
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

          return (
            <fieldset
              className={styles.fieldset_body}
              key={user._id.toString()}
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
                      {isEditing ? (
                        <div>
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
                          />
                         <h6 className={styles.user_location}>
  <input
    type="text"
    name="location"
    id="location"
    value={editValues.location}
    onChange={(e) =>
      setEditValues({ ...editValues, location: e.target.value })
    }
  />
</h6>
</td>
</tr>
<tr>
  <td>
    <div>
      <nav>
        <br />
        <h2 className={styles.playerInfo_h2}>Contact</h2>
        <br />
        <input
          type="text"
          name="discord"
          id="discord"
          value={editValues.discord}
          onChange={(e) =>
            setEditValues({ ...editValues, discord: e.target.value })
          }
        />
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
      onClick={() => handleEditClick(user._id)}
    >
      Edit
    </button>
  </td>
</tr>
</tbody>
</table>
</fieldset>
)
})
}
<Breaks />
</div>
)
}
</div>
)
}

export default AdminPage



