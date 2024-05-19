const mongodb = require("mongodb");

async function main() {
  try {
    const client = new mongodb.MongoClient(
      "mongodb://root:pass@localhost:27017",
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
