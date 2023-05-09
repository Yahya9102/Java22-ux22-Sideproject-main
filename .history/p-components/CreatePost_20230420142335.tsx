import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "p-components/styles/createPost.module.css"
import { User } from "@/types/users"

const CreatePost: NextPage = () => {
  const router = useRouter()
  const [postData, setPostData] = useState<User>({
    name: "",
    title: "",
    post: "",
    discord: "",
    location: "",
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }))
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData((prevState) => ({
      ...prevState,
      title: e.target.value,
    }))
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData((prevState) => ({
      ...prevState,
      post: e.target.value,
    }))
  }

  const handleDiscordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData((prevState) => ({
      ...prevState,
      discord: e.target.value,
    }))
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData((prevState) => ({
      ...prevState,
      location: e.target.value,
    }))
  }

  const handleGoBackClick = () => {
    router.push("/")
  }

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: postData.name,
          title: postData.title,
          post: postData.post,
          discord: postData.discord,
          location: postData.location,
        }),
      })
      const data = await response.json()
      console.log("Response:", data)
      router.push("/")
    } catch (error) {
      console.error("Error posting data:", error)
    }
  }

  return (
    <div>
      <fieldset className={styles.form_body}>
        <p onClick={handleGoBackClick} className={styles.link_P}>
          Go back
        </p>
        <form onSubmit={handlePostSubmit}>
          <label htmlFor="name" className={styles.input_label}>
            <strong>Name</strong>
          </label>
          <p className={styles.input_label}>What should we call you?</p>
          <br />
          <input
            type="text"
            placeholder='Ex: "Jane Doe" or "@useer01"'
            className={styles.input_fields}
            onChange={handleNameChange}
            value={postData.name}
          />
          <br />
          <label htmlFor="title" className={styles.input_label}>
            <strong>Title</strong>
          </label>
          <p className={styles.input_label}>
            Give your post a descriptive title
          </p>
          <br />
          <input
            type="text"
            name="title"
            id=""
            placeholder='Ex: "Beginner looking for a League partner"'
            className={styles.input_fields}
            onChange={handleTitleChange}
            value={postData.title}
          />
          <br />

          <label htmlFor="text" className={styles.input_label}>
            <strong>Text</strong>
          </label>
          <p className={styles.input_label}>
            Who are you? And who are you looking for?
          </p>
          <br />

          <textarea
            name="post"
            id=""
            placeholder='Ex "Looking for someone to play League with. Preferably someone new to the game like me, so we can improve together."'
            cols={20}
            rows={5}
            className={styles.input_fields}
            onChange={handleTextChange}
            value={postData.post}
          />
          <h2 className={styles.input_label}>
            <strong>Contact Channels</strong>
          </h2>
          <br />
          <p className={styles.input_label}>
            Add your discord channel for contact
          </p>
          <br />
          <div className={styles.contact_info}>
            <label htmlFor="discord">Discord</label>

            <br />
            <input
              type="text"
              name="discord"
              id=""
              placeholder="Ex:Discord"
              onChange={handleDiscordChange}
              value={postData.discord}
              className={styles.input_fields_contact}
            />

            <label htmlFor="location">Location</label>

            <input
              type="text"
              name="location"
              id=""
              placeholder="Ex: New York, USA"
              onChange={handleLocationChange}
              value={postData.location}
              className={styles.input_fields_contact}
            />
          </div>
          <br />
          <div className={styles.button_div}>
            <button type="submit" className={styles.createpost_button}>
              Post
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default CreatePost
