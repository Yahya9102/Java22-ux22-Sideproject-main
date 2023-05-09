import React, { useEffect } from "react"
import { useRouter } from "next/router"

const loginAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter()
    const isAuthenticated = localStorage.getItem("email")

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login")
      }
    }, [])

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }

  return AuthenticatedComponent
}

export default loginAuth
