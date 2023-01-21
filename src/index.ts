import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "red",
    type: "postgresql",
    user: "postgres",
    port: 5433,
    password: "password123",
    debug: !__prod__,
  });

  //create post
  const post = orm.em.create(Post, {
    title: "First post",
  });

  //insert post into database.
  await orm.em.persistAndFlush(post);
};

main();

console.log("Hello world");
