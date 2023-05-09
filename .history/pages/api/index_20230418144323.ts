import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "@/utils/db"
import { User } from "@/types/users"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | User[] | string>
) {
  try {
    const db = await connectToDatabase()
    switch (req.method) {
      case "GET": {
        // Get all users from the database
        const users = await db.collection("users").find().toArray()
        const convertedUsers: User[] = users.map((userDoc) => {
          return {
            name: userDoc.name as string,
            title: userDoc.title as string,
            post: userDoc.post as string,
            discord: userDoc.discord as string,
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
        res.setHeader("Allow", ["GET"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        break
      }
    }
  } catch (error) {
    throw new Error("Something went wrong " + error)
  }
}
