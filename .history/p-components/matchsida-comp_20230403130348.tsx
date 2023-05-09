import React from "react"

function SearchForm() {
  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  }

  return (
    <form action="submit" style={{ backgroundColor: "#eee" }}>
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

export default SearchForm
