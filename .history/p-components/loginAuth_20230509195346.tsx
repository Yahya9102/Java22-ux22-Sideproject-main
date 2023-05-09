import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

const loginAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      const userEmail = localStorage.getItem("email")
      setIsAuthenticated(Boolean(userEmail))

      if (!userEmail) {
        router.push("/login")
      }
    }, [])

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }

  return AuthenticatedComponent
}

export default loginAuth
