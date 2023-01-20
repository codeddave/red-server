import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "red",
    user: "postgres",
    password: "password123",
    debug: !__prod__,
  });
};
main();

console.log("Hello world");
