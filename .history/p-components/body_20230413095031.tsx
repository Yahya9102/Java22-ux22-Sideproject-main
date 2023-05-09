import { NextPage } from "next"

interface Props {}

const Body: NextPage<Props> = ({}) => {
  return (
    <div>
      <table>
        <tr>
          <th>USERNAME</th>
        </tr>
        <tr>
          <td>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quo
            aliquam exercitationem beatae vel odio molestiae voluptate iure
            mollitia est dicta iste perspiciatis voluptatem enim, neque
            blanditiis nobis perferendis voluptatum!
          </td>
        </tr>
        <tr>
          <button type="submit">Reply</button>
        </tr>
      </table>
    </div>
  )
}

export default Body
