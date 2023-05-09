import { NextPage } from "next"
import Image from "next/image"
import gmlogo from "/public/gmlogo.png"
import styles from "./styles/header.module.css"
import { useRouter } from "next/router"
import Link from "next/link"
import { useState } from "react"

const Header: NextPage = () => {
  const router = useRouter()

  const handleReturnToStartPage = () => {
    router.push("/startPage")
  }

  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenuToggle() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={styles.header_container}>
      <div className={styles.header_background}>
        <header className={styles.header_body}>
          <div className={styles.menu_icon}>
            <button type="button" onClick={handleMenuToggle}>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
          <div className={styles.menu_title}>
            <button type="button" onClick={handleReturnToStartPage}>
              <Image src={gmlogo} alt="Picture is unavailable" width={95} />
            </button>
          </div>
          <nav
            className={
              menuOpen
                ? `${styles.menu_links} ${styles.menu_open}`
                : styles.menu_links
            }
            onClick={handleMenuToggle}
          >
            <Link href="/">
              <p className={styles.menu_links_p}>Guidelines</p>
            </Link>
            <Link href="/startPage">
              <p className={styles.menu_links_p}>Start Page</p>
            </Link>
            <Link href="/adminLogin">
              <p className={styles.menu_links_p}> Admin Login</p>
            </Link>
            <Link href="/loginPage">
              <p className={styles.menu_links_p}>Log in</p>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header
