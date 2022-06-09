import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);

export default async function connect() {
  await client.connect();

  const db = client.db(process.env.DATABASE_NAME);

  return { db, client };
}
