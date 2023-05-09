// loginAuth.tsx
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
      const email = localStorage.getItem("email")
      setIsAuthenticated(!!email)

      if (!email) {
        router.push("/loginPage")
      }
    }, [])

    return isAuthenticated ? (
      <WrappedComponent {...props} email={localStorage.getItem("email")} />
    ) : null
  }
}

export default withAuth
