import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-yqzhstr-shard-00-00.uoeirjf.mongodb.net:27017,ac-yqzhstr-shard-00-01.uoeirjf.mongodb.net:27017,ac-yqzhstr-shard-00-02.uoeirjf.mongodb.net:27017/?ssl=true&replicaSet=atlas-scnr9k-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewURLParser: true,
    });
    console.log("Connected To Database Successfully");
  } catch (error) {
    console.log("Error While Connecting To Database", error);
  }
};

export default Connection;
