import { NextPage } from "next"
import { ChangeEvent, useState } from "react"
import router, { useRouter } from "next/router"
import styles from "p-components/styles/register.module.css"
import Header from "@/p-components/header"

const Register: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Registration failed")
      }

      const data = await response.json()
      router.push(`/loginPage`)
    } catch (error) {
      console.error("Error during registration:", error)
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.register_body}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <br />
          <input
            className={styles.input_fields}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />

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
          <br />
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
          <br />
          <button type="submit" className={styles.userRegister_button}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
