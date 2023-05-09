import React from "react"
import "./styles/registerForm.css"

function RegisterForm() {
  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  }

  const formStyle = {
    backgroundColor: "rgba(232, 222, 248, 1)",
    margin: "5px",
    padding: "2px",
  }

  return (
    <form action="submit" style={formStyle}>
      <fieldset>
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="gamertag" style={labelStyle}>
          Gamertag
        </label>
        <input type="text" name="gamertag" id="gamertag" />
        <br />
        <label htmlFor="games" style={labelStyle}>
          Games to play
        </label>
        <input type="text" name="games" id="games" />
        <br />
        <label htmlFor="discord" style={labelStyle}>
          Discord
        </label>
        <input type="text" name="discord" id="discord" />
        <br />
        <label htmlFor="gender" style={labelStyle}>
          Gender
        </label>
        <input type="text" name="gender" id="gender" />
        <br />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  )
}

export default RegisterForm
