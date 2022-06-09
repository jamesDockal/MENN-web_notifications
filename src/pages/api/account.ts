/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import connect from "../../services/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connect();
    console.log("req.query", req.query);

    if (req.method === "POST") {
      const { name } = req.body;
      if (!name) {
        res.status(400).json({
          message: "Field 'Name' was not provided!",
        });
      }

      await db.collection("accounts").insertOne({ name });

      return res.status(201).json({ message: "Account created!" });
    }
    if (req.method === "GET") {
      const { name } = req.query;

      const account = await db.collection("accounts").findOne({
        name,
      });

      return res.status(200).json({ account });
    }

    return res.status(404).json({ message: "Route not found!" });
  } catch (error) {
    return res.status(500).json({ message: "Server Internal error!" });
  }
};
