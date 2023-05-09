import { NextPage } from "next"
import styles from "p-components/styles/createPost.module.css"
interface Props {}

const CreatePost: NextPage<Props> = ({}) => {
  return (
    <div>
      <fieldset className={styles.form_body}>
        <form action="">
          <label htmlFor="name">
            {" "}
            <strong>Name</strong>
          </label>
          <p>What should we call you?</p>
          <br />
          <input
            type="text"
            placeholder='Ex: "Jane Doe" or "@useer01"'
            className={styles.input_fields}
          />
          <br />
          <label htmlFor="title">
            {" "}
            <strong>Title</strong>
          </label>
          <p>Give your post a descriptive title</p>
          <br />
          <input
            type="text"
            name="title"
            id=""
            placeholder='Ex: "Beginner looking for a League partner"'
            className={styles.input_fields}
          />
          <br />
          <label htmlFor="text">
            {" "}
            <strong>Text</strong>
          </label>
          <p>Who are you? And who are you looking for?</p>
          <br />

          <textarea
            name="text"
            id=""
            placeholder='Ex "Looking for someone to play League with. Preferably someone new to the game like me, so we can improve together."'
            cols={20}
            rows={5}
          />
          <h2>
            {" "}
            <strong>Contact Channels</strong>
          </h2>
          <br />
          <p>Add your discord channel for contact</p>
          <br />
          <div>
            <label htmlFor="discord">Discord</label>

            <br />
            <input type="text" name="discord" id="" placeholder="Ex:Discord" />
            <br />
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" id="" placeholder="Ex:@user01" />
          </div>
          <button type="submit">Post</button>
        </form>
      </fieldset>
    </div>
  )
}

export default CreatePost
