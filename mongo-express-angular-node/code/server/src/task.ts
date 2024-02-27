import * as mongodb from "mongodb";

export interface Task {
  id?: mongodb.ObjectId;
  name: string;
  description: string;
  completed: boolean;
}
