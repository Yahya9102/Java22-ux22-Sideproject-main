import { NextPage } from "next"
import styles from "p-components/styles/createPost.module.css"
interface Props {}

const CreatePost: NextPage<Props> = ({}) => {
  return (
    <div>
      <fieldset className={styles.form_body}>
        <form action="">
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
          <label htmlFor="discord">Discord</label>
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" name="discord" id="" />
          <input type="text" name="username" id="" />
        </form>
      </fieldset>
    </div>
  )
}

export default CreatePost
