import { NextPage } from "next"

interface Props {}

const CreatePost: NextPage<Props> = ({}) => {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" placeholder="Ex:Jane Doe or @useer01" />
      </form>
    </div>
  )
}

export default CreatePost
