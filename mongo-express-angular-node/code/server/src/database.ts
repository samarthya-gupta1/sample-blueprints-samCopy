import * as mongodb from "mongodb";
import { Task } from "./task";

export const collections: {
  tasks?: mongodb.Collection<Task>;
} = {};

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri);
  await client.connect();

  const db = client.db("todo-list-collection");

  const employeesCollection = db.collection<Task>("tasks");
  collections.tasks = employeesCollection;
}
