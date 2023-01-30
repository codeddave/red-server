import { MikroORMOptions } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const options: Partial<MikroORMOptions> = {
  migrations: {},
  entities: [Post],
  dbName: "red",
  type: "postgresql",
  user: "postgres",
  port: 5433,
  password: "password123",
  debug: !__prod__,
};

/* {

} as Parameters<typeof MikroOrm.init>[0]  gets the type that init expecvts for uts first parameter which is the options object */
export default options;
