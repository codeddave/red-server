import { MikroORMOptions } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
const options: Partial<MikroORMOptions> = {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post],
  dbName: "red",
  type: "postgresql",
  user: "postgres",
  host: "localhost",
  port: 5434,
  password: "pass123",
  debug: !__prod__,
};

/* { 

} as Parameters<typeof MikroOrm.init>[0]  gets the type that init expecvts for uts first parameter which is the options object */
export default options;
