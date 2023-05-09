import { NextPage } from "next"
import styles from "p-components/styles/playerInfo.module.css"
import Image from "next/image"
import heartimage from "../public/heartimage.png"
import { useState } from "react"

interface Props {
  name: string
  infoPost: string
  discord: string
}

const Body: NextPage<Props> = ({}) => {
  const [user, setUser] = useState<Props>()

  //Fetch database
  //Render out info

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
                    Hi this is the headline
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
                      <strong>Discord</strong>
                    </a>
                    <br />
                    <a href="https://store.steampowered.com//">
                      {" "}
                      <strong>Steam</strong>
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
