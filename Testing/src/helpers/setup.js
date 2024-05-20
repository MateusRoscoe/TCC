const mongodb = require("mongodb");
const fs = require("fs");
const MONGO_HOST = process.env.MONGO_HOST || "localhost:27017";

async function main() {
  try {
    console.log("Creating results directory");
    fs.mkdirSync("results/average-load", { recursive: true });
    fs.mkdirSync("results/breakpoint", { recursive: true });

    console.log("Cleaning up database");
    const client = new mongodb.MongoClient(
      `mongodb://root:pass@${MONGO_HOST}`,
      {}
    );
    await client.connect();
    const db = client.db("test");
    const collections = await db.listCollections().toArray();
    for (const collection of collections) {
      await db.collection(collection.name).drop();
      console.log(`Dropped collection: ${collection.name}`);
    }

    console.log("Creating collection and indexes");
    await db.createCollection("codes");

    await db.collection("codes").createIndex({ code: 1 }, { unique: true });

    await client.close();

    console.log("Finished cleaning up database");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
