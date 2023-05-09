import { NextPage } from "next"

interface Props {}

const Form: NextPage<Props> = ({}) => {
  return (
    <div>
      <form action="submit className= bg-lime-300 w-6">
        <fieldset>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" />
          <br />
          <br /> <label htmlFor="name">Gamertag</label>
          <br />
          <input type="text" name="name" id="gamertag" />
          <br />
          <br /> <label htmlFor="name">Games to play</label>
          <br />
          <input type="text" name="name" id="games" />
          <br />
          <br /> <label htmlFor="name">discord</label>
          <br />
          <input type="text" name="name" id="discord" />
          <br /> <label htmlFor="name">gender</label>
          <br />
          <input type="text" name="name" id="gender" />
          <br />
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Form
