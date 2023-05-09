import { NextPage } from "next"

interface Props {}

const Body: NextPage<Props> = ({}) => {
  return (
    <fieldset>
      <table>
        <thead>
          <tr>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              tenetur, nihil aliquam unde eveniet eius tempore consequuntur enim
              voluptatibus numquam laboriosam exercitationem in. Eum, nam odit
              accusantium dignissimos iusto quidem.
            </td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>jane.doe@example.com</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  )
}

export default Body
