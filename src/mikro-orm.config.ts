import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
  entities: [Post],
  dbName: "red",
  type: "postgresql",
  user: "postgres",
  port: 5433,
  password: "password123",
  debug: !__prod__,
};
