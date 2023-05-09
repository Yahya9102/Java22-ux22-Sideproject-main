import { NextPage } from "next"

interface Props {}

const CreatePost: NextPage<Props> = ({}) => {
  return (
    <div>
      <form action="">
        <fieldset className=" bg-slate-400">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" placeholder='Ex: "Jane Doe" or "@useer01"' />
          <br />
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id=""
            placeholder='Ex: "Beginner looking for a League partner"'
          />
          <br />
          <label htmlFor="text">Text</label>
          <br />

          <textarea
            name="text"
            id=""
            placeholder='Ex "Looking for someone to play League with. Preferably someone new to the game like me, so we can improve together."'
          />
          <h2>Contact Channels</h2>
          <br />
          <p>Add your discord channel for contact</p>
          <br />
        </fieldset>
      </form>
    </div>
  )
}

export default CreatePost
