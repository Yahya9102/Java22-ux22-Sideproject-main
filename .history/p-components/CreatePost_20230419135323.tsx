import { NextPage } from "next"

interface Props {}

const CreatePost: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className=" bg-slate-500">
        <form action="">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" placeholder="Ex: Jane Doe or @useer01" />
          <br />
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id=""
            placeholder="Ex: Beginner looking for a League partner"
          />
          <br />
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            name="text"
            id=""
            placeholder="Ex Looking for someone to play League with. Preferably someone new to the game like me, so we can improve together"
          />
        </form>
      </div>
    </div>
  )
}

export default CreatePost
