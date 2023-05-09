import React, { useState } from "react"
import styles from "./styles/leftSection.module.css"

interface LeftSectionProps {
  onClick: (formData: FormData) => void
}

function LeftSection({ onClick }: LeftSectionProps): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "",
  })

  const handleSubmit = (formDataObj: FormData) => {
    onClick(formDataObj)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className={styles.left_section}>
      <div className={styles.navbar_matchside}>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(new FormData(e.currentTarget))
            }}
            className={styles.form}
          >
            <fieldset>
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
              <br />
              <br />
              <button type="submit" className={styles.submit_button}>
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
