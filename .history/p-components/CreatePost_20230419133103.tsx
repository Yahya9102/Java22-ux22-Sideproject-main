import { NextPage } from "next"

interface Props {}

const CreatePost: NextPage<Props> = ({}) => {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" />
      </form>
    </div>
  )
}

export default CreatePost
