import { NextPage } from 'next'
import styles from "@p-components/styles/playerInfo.module.css"

interface Props {}

const PlayerInfo: NextPage<Props> = ({}) => {

  return 
  <div>
        <fieldset className={styles.fieldset_body}>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader_PlayerInfo}>NovaStorm93</th>
              </tr>
            </thead>
  
            <tbody>
          
                  <td>
                    <fieldset className={styles.fieldset_row}>
                      <h2 className={styles.playerInfo_h2}>Hello</h2>
                      <br />
                      <p>Hello</p>
                    </fieldset>
                  </td>
                </tr>
              ))}
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
        
                        <strong>Steam</strong>
                      </a>
                    </nav>
                  </div>
                </td>
              </tr>
              {/* <tr>
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
}

export default PlayerInfo