import { NextPage } from "next"
import styles from "p-components/styles/body.module.css"
import Image from "next/image"
import hearthimage from "../public/hearthimage.png"

interface Props {}

const Body: NextPage<Props> = ({}) => {
  return (
    <fieldset className={styles.fieldset_body}>
      <table>
        <thead>
          <tr>
            <th className={styles.tableHeader_body}>NovaStorm93</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <fieldset className={styles.fieldset_row}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis, tenetur, nihil aliquam unde eveniet eius tempore
                  consequuntur enim voluptatibus numquam laboriosam
                  exercitationem in. Eum, nam odit accusantium dignissimos iusto
                  quidem.
                </p>
              </fieldset>
            </td>
          </tr>

          <tr>
            <td>
              <Image
                src={hearthimage}
                width={24}
                height={24}
                alt="Heart icon"
              />
              <button className={styles.table_button}>Reply</button>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  )
}

export default Body
