import React, { useState } from "react"
import styles from "./styles/registerForm.module.css"

interface Props {
  user: User
  setUser: (user: User) => void
}

interface User {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

const RegisterForm: React.FC<Props> = ({ user, setUser }) => {
  const [formData, setFormData] = useState<User>(user)

  const handleClick = () => {
    setUser(formData)
  }

  return (
    <div>
      <form className={styles.form}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="gamertag">Gamertag</label>
          <br />
          <input
            type="text"
            name="gamertag"
            id="gamertag"
            value={formData.gamertag}
            onChange={(event) =>
              setFormData({ ...formData, gamertag: event.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="games">Games to play</label>
          <br />
          <input
            type="text"
            name="games"
            id="games"
            value={formData.games}
            onChange={(event) =>
              setFormData({ ...formData, games: event.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="discord">Discord</label>
          <br />
          <input
            type="text"
            name="discord"
            id="discord"
            value={formData.discord}
            onChange={(event) =>
              setFormData({ ...formData, discord: event.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="gender">Gender</label>
          <br />
          <input
            type="text"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={(event) =>
              setFormData({ ...formData, gender: event.target.value })
            }
          />
          <br />
          <br />
          <button
            type="button"
            onClick={handleClick}
            className="rounded-md px-2 py-1 bg-slate-400"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default RegisterForm
