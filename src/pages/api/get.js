/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb"

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("youtube_api");

    const movies = await db
      .collection("youtube_api_collection")
      .find({})
      .toArray();

    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
