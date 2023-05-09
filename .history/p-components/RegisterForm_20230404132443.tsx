import React, { useState } from "react"
import styles from "./styles/registerForm.module.css"

interface FormInputs {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

function RegisterForm() {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(formInputs) // do something with form inputs here
    setFormInputs({
      name: "",
      gamertag: "",
      games: "",
      discord: "",
      gender: "",
    }) // reset the form inputs after submitting
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
            value={formInputs.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="gamertag">Gamertag</label>
          <br />
          <input
            type="text"
            name="gamertag"
            id="gamertag"
            value={formInputs.gamertag}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="games">Games to play</label>
          <br />
          <input
            type="text"
            name="games"
            id="games"
            value={formInputs.games}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="discord">Discord</label>
          <br />
          <input
            type="text"
            name="discord"
            id="discord"
            value={formInputs.discord}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender</label>
          <br />
          <input
            type="text"
            name="gender"
            id="gender"
            value={formInputs.gender}
            onChange={handleChange}
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
