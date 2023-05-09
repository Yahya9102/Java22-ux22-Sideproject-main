import { connectToDatabase } from "@/utils/db"
import type { NextApiRequest, NextApiResponse } from "next"
import { ObjectId } from "mongodb"
import { User } from "@/types/users"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | User[] | string>
) {
  if (req.method === "DELETE") {
    try {
      const { userId } = req.query
      const db = await connectToDatabase()
      const result = await db
        .collection("users")
        .deleteOne({ _id: new ObjectId(userId as string) })
      if (result.deletedCount === 0) {
        res.status(404).json(`User with ID ${userId} not found`)
      } else {
        res.status(204).end()
      }
    } catch (error) {
      console.error(error)
      res.status(500).json("Internal Server Error")
    }
  } else {
    res.status(405).send(`Method ${req.method} Not Allowed`)
  }
}
