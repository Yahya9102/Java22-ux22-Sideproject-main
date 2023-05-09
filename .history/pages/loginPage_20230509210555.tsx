import { NextPage } from "next"
import { useState, ChangeEvent } from "react"
import { useRouter } from "next/router"
import styles from "p-components/styles/login.module.css"
import Header from "@/p-components/header"

const Login: NextPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/gettingUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        console.log("login failed")
        throw new Error("Login failed")
      }

      const data = await response.json()
      router.push(`/profile?email=${encodeURIComponent(data.email)}`)
      sessionStorage.setItem("email", data.email)
    } catch (error) {
      console.error("Error during login:", error)
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.login_body}>
        <fieldset>
          <form onSubmit={handleSubmit} className={styles.login_form}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <br />
            <input
              className={styles.input_fields}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <br />
            <input
              className={styles.input_fields}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className={styles.userLogin_button}>
              Login
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  )
}

export default Login
