import React from "react"
import styles from "./styles/middleSection.module.css"

function MiddleSection() {
  return (
    <div className="middle_section">
      <div className={styles.middle_section}>
        <div className=" mt-1">
          <Image src={piccachu} alt="Pikachu" width={30} height={20} />
        </div>

        <div className={styles.table_container}>
          <table className={styles.player_info}>
            <tbody>
              <tr>
                <th className=" pl-7">
                  <Image src={diablo} alt="Pikachu" width={260} height={20} />
                </th>
              </tr>
              <tr>
                <td>Language1</td>
              </tr>
            </tbody>
          </table>
          <table className={styles.player_info}>
            <tbody>
              <tr>
                <th>
                  {" "}
                  <th className=" pl-7">
                    <Image src={diablo} alt="Pikachu" width={260} height={20} />
                  </th>
                </th>
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
    </div>
  )
}

export default MiddleSection
