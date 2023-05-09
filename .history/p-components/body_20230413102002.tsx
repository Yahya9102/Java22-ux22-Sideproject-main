import { NextPage } from "next"
import styles from "p-components/styles/body.module.css"

interface Props {}

const Body: NextPage<Props> = ({}) => {
  return (
    <fieldset className={styles.fieldset_body}>
      <table>
        <thead>
          <tr>
            <th className={styles.tableHeader_body}>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              tenetur, nihil aliquam unde eveniet eius tempore consequuntur enim
              voluptatibus numquam laboriosam exercitationem in. Eum, nam odit
              accusantium dignissimos iusto quidem.
            </td>
          </tr>
          <tr>
            <td data-label="Username">Jane Doe</td>
          </tr>
          <tr>
            <td>
              <button className={styles.table_button}>Reply</button>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  )
}

export default Body
