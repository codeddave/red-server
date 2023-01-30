import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  //create post
  const post = orm.em.create(Post, {
    title: "First post",
  });
  console.log(post);
  /*   //insert post into database.
  await orm.em.persistAndFlush(post);

  //
  await orm.em.insert(Post, { title: "First post2",}) */
};

main();

console.log("Hello world");
