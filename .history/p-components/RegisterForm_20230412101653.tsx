import React, { useState } from "react"
import styles from "./styles/registerForm.module.css"

interface Form {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

function RegisterForm() {
  const [register, setRegister] = useState<Form>({
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "",
  })

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
            value={register.name}
            onChange={(event) =>
              setRegister({ ...register, name: event.target.value })
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
            value={register.gamertag}
            onChange={(event) =>
              setRegister({ ...register, gamertag: event.target.value })
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
            value={register.games}
            onChange={(event) =>
              setRegister({ ...register, games: event.target.value })
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
            value={register.discord}
            onChange={(event) =>
              setRegister({ ...register, discord: event.target.value })
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
            value={register.gender}
            onChange={(event) =>
              setRegister({ ...register, gender: event.target.value })
            }
          />
          <br />
          <br />
          <button type="button" className="rounded-md px-2 py-1 bg-slate-400">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default RegisterForm
