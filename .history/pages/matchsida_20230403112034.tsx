import { NextPage } from "next"
import styles from "../styles/Matchsida.module.css"
import Image from "next/image"
import imageAsset from "/media/piccachu.png"

function Matchsida() {
  return (
    <div>
      <div className={styles.body_div}>
        <div className={styles.left_sidebar}>
          <div className={styles.navbar_matchside}>
            <div>
              <form action="submit" className={styles.form}>
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" name="name" id="name" />
                  <br />
                  <br />
                  <label htmlFor="gamertag">Gamertag</label>
                  <br />
                  <input type="text" name="gamertag" id="gamertag" />
                  <br />
                  <br />
                  <label htmlFor="games">Games to play</label>
                  <br />
                  <input type="text" name="games" id="games" />
                  <br />
                  <br />
                  <label htmlFor="discord">Discord</label>
                  <br />
                  <input type="text" name="discord" id="discord" />
                  <br />
                  <br />
                  <label htmlFor="gender">Gender</label>
                  <br />
                  <input type="text" name="gender" id="gender" />
                  <br />
                  <br />
                  <button
                    type="submit"
                    className=" rounded-md px-2 py-1 bg-slate-400"
                  >
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.middle_section}>
          <div className=" mt-1">
            <Image src={imageAsset} alt="Pikachu" width={50} height={20} />
          </div>

          <div className={styles.table_container}>
            <table className={styles.player_info}>
              <tbody>
                <tr>
                  <th></th>
                  <td>USERNAME</td>
                </tr>
                <tr>
                  <td>Language1</td>
                  <td>More info</td>
                </tr>
              </tbody>
            </table>
            <table className={styles.player_info}>
              <tbody>
                <tr>
                  <th></th>
                  <td>USERNAME</td>
                </tr>
                <tr>
                  <td>Language2</td>
                  <td>More info</td>
                </tr>
              </tbody>
            </table>
            <table className={styles.player_info}>
              <tbody>
                <tr>
                  <th></th>
                  <td>USERNAME</td>
                </tr>
                <tr>
                  <td>Language1</td>
                  <td>More info</td>
                </tr>
              </tbody>
            </table>
            <table className={styles.player_info}>
              <tbody>
                <tr>
                  <th></th>
                  <td>USERNAME</td>
                </tr>
                <tr>
                  <td>Language2</td>
                  <td>More info</td>
                </tr>
              </tbody>
            </table>

            <table className={styles.player_info}>
              <tbody>
                <tr>
                  <th></th>
                  <td>USERNAME</td>
                </tr>
                <tr>
                  <td>Language1</td>
                  <td>More info</td>
                </tr>
              </tbody>
            </table>
            <table className={styles.player_info}>
              <tbody>
                <tr>
                  <th></th>
                  <td>USERNAME</td>
                </tr>
                <tr>
                  <td>Language2</td>
                  <td>More info</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.right_section}>
          <h2 id={styles.matchside_right_top_text}>
            What are you searching for?
          </h2>
          <div className={styles.gender}>
            <h3>Gender</h3>
            <div className={styles.gender_options}>
              <label htmlFor={styles.female}>Female</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="all">All</label>
              <input type="radio" id="all" name="gender" value="all" />
            </div>
          </div>

          <div className={styles.age}>
            <h3>Age</h3>
            <input type="range" id="age" name="age" min="15" max="80" />
          </div>
          <div className={styles.platform}>
            <h3>Platform</h3>
            <div className={styles.platform_options}>
              <input
                type="checkbox"
                id={styles.pc}
                name="platform"
                value="pc"
              />
              <label htmlFor="pc">PC</label>
              <input
                type="checkbox"
                id={styles.console}
                name="platform"
                value="console"
              />
              <label htmlFor="console">Console</label>
            </div>
          </div>
          <div className={styles.games}>
            <h3>Games</h3>
            <div className={styles.games_options}>
              <input type="checkbox" id={styles.rpg} name="games" value="rpg" />
              <label htmlFor="rpg">RPG</label>
              <br />
              <input
                type="checkbox"
                id={styles.action_adventure}
                name="games"
                value="action-adventure"
              />
              <label htmlFor="action-adventure">Action-Adventure</label>
              <br />
              <input
                type="checkbox"
                id={styles.fantasy}
                name="games"
                value="fantasy"
              />
              <label htmlFor="fantasy">Fantasy</label>
              <br />
              <input
                type="checkbox"
                id={styles.first_person_shooter}
                name="games"
                value="first-person-shooter"
              />
              <label htmlFor="first-person-shooter">First-Person-Shooter</label>
              <br />
              <input
                type="checkbox"
                id={styles.strategy}
                name="games"
                value="strategy"
              />
              <label htmlFor="strategy">Strategy</label>
              <br />
              <input
                type="checkbox"
                id={styles.puzzles}
                name="games"
                value="puzzles"
              />
              <label htmlFor="puzzles">Puzzles</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matchsida
