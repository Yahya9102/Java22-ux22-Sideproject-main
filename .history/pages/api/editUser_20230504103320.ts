import { connectToDatabase } from "@/utils/db"
import type { NextApiRequest, NextApiResponse } from "next"
import { User } from "@/types/users"
import { ObjectId } from "mongodb"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | string>
) {
  const { name, title, post, discord, location } = req.body
  const id = req.query.id as string

  if (req.method === "PUT") {
    if (!id || typeof id !== "string" || !ObjectId.isValid(id)) {
      res.status(400).json("Invalid user ID")
      return
    }

    try {
      const userToUpdate = {
        name,
        title,
        post,
        discord,
        location,
      }

      const db = await connectToDatabase()

      // Check if the user exists
      const userDoc = await db
        .collection("users")
        .findOne({ _id: new ObjectId(id) })

      if (!userDoc) {
        res.status(404).json("User not found")
        return
      }

      // Proceed with the update operation
      const result = await db
        .collection("users")
        .updateOne({ _id: new ObjectId(id) }, { $set: userToUpdate })

      if (result.modifiedCount === 0) {
        res.status(200).json("No changes were made to the user.")
      } else {
        res.status(200).json(userToUpdate)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json("Internal Server Error")
    }
  } else {
    res.status(405).send(`Method ${req.method} Not Allowed`)
  }
}
