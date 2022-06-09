/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import connect from "../../services/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({
        message: "Field 'Name' was not provided!",
      });
    }

    const { db } = await connect();

    await db.collection("names").insertOne({ name });

    res.status(201).json({ message: "User created!" });
  }
  return res.status(404).json({ message: "Route not found!" });
};
