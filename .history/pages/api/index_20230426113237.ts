import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "@/utils/db"
import { User } from "@/types/users"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | string>
) {
  try {
    const db = await connectToDatabase()
    switch (req.method) {
      case "GET": {
        // Get all users from the users collection and sort them by index id -1 s the latest always shows on top
        const users = await db
          .collection("users")
          .find()
          .sort({ _id: -1 })
          .toArray()
        const convertedUsers: User[] = users.map((userDoc) => {
          return {
            name: userDoc.name as string,
            title: userDoc.title as string,
            post: userDoc.post as string,
            discord: userDoc.discord as string,
            location: userDoc.location as string,
            _id: userDoc._id as any,
          }
        })
        if (convertedUsers.length === 0) {
          res.status(200).json("EMPTY")
        } else {
          res.status(200).json(convertedUsers)
        }
        break
      }

      default: {
        // Return a 405 Method Not Allowed error for all other HTTP methods

        // res.setHeader("Allow", "GET")
        res.status(405).end(`Method ${req.method} Not Allowed`)
        break
      }
    }
  } catch (error) {
    throw new Error("Something went wrong " + error)
  }
}
