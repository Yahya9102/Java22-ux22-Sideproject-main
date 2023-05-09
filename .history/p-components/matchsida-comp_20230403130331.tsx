import React from "react"
import styles from "./styles.module.css"

function SearchForm() {
  return (
    <form action="submit" className={styles.form}>
      <fieldset>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" id="name" />
        <br />
        <br />
        <label htmlFor="gamertag">Gamertag</label>
        <br />
        <input type="text" name="gamertag" id="gamertag" />
        <br />
        <br />
        <label htmlFor="games">Games to play</label>
        <br />
        <input type="text" name="games" id="games" />
        <br />
        <br />
        <label htmlFor="discord">Discord</label>
        <br />
        <input type="text" name="discord" id="discord" />
        <br />
        <br />
        <label htmlFor="gender">Gender</label>
        <br />
        <input type="text" name="gender" id="gender" />
        <br />
        <br />
        <button type="submit" className=" rounded-md px-2 py-1 bg-slate-400">
          Submit
        </button>
      </fieldset>
    </form>
  )
}

export default SearchForm
