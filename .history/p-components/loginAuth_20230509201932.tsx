import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

const loginAuth = (WrappedComponent: NextPage<any>) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter()
    const isAuthenticated = !!sessionStorage.getItem("email")

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/loginPage")
      }
    }, [])

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }

  return AuthenticatedComponent
}

export default loginAuth
