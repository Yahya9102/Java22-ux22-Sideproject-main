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
        </form>
      </div>
    </div>
  )
}

export default CreatePost
