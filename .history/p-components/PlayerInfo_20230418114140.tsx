import { User } from "@/types/users"
import { NextPage } from "next"
import styles from "p-components/styles/playerInfo.module.css"
//import Image from "next/image"
//import heartimage from "../public/heartimage.png"

interface Props {}

const Body: NextPage<Props> = ({}) => {
  const addUser = async (user: User) => {
    try {
      const response = await fetch("/api/user/newUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <fieldset className={styles.fieldset_body}>
        <table>
          <thead>
            <tr>
              <th className={styles.tableHeader_PlayerInfo}>NovaStorm93</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <fieldset className={styles.fieldset_row}>
                  <h2 className={styles.playerInfo_h2}>
                    Looking for gamingpartner
                  </h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis, tenetur, nihil aliquam unde eveniet eius tempore
                    consequuntur enim voluptatibus numquam laboriosam
                    exercitationem in. Eum, nam odit accusantium dignissimos
                    iusto quidem.
                  </p>
                </fieldset>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <nav>
                    <br />
                    <h2 className={styles.playerInfo_h2}>
                      <strong>Contact</strong>
                    </h2>{" "}
                    <br />
                    <a href="https://discord.com/">
                      <strong>Discord: Yahya9110</strong>
                    </a>
                    <br />
                    <a href="https://store.steampowered.com//">
                      {" "}
                      <strong>Steam: Yahya9110</strong>
                    </a>
                  </nav>
                </div>
              </td>
            </tr>
            {/**   <tr>
              <td>
                <div className={styles.table_button_wrapper}>
                  <Image
                    src={heartimage}
                    className={styles.heartimage}
                    alt="Heart icon"
                  />
                  <button className={styles.table_button}>Reply</button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </fieldset>
    </div>
  )
}

export default Body
