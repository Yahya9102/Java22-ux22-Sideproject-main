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
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>30</td>
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
