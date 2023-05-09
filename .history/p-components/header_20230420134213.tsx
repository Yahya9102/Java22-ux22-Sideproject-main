import { NextPage } from "next"
import Image from "next/image"
import styles from "./styles/header.module.css"
// import "../media/hamburger-menu.png"

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <div className={styles.header_background}>
      <header className={styles.header_body}>
        <div className={styles.menu_title}>
          <h1>
            <strong>GameMatch</strong>
          </h1>
        </div>
      </header>
    </div>
  )
}

export default Header
