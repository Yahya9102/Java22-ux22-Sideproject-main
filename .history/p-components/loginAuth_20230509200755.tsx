import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

const withAuth = (WrappedComponent: React.FC<{ email?: string }>) => {
  const AuthenticatedComponent: React.FC<{ email?: string }> = (props) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
      const userEmail = props.email || localStorage.getItem("email")
      setIsAuthenticated(Boolean(userEmail))

      if (!userEmail) {
        router.push("/loginPage")
      }
    }, [props.email])

    if (!isMounted) {
      return null
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }

  return AuthenticatedComponent
}

export default withAuth
