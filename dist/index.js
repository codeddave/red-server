"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [Post_1.Post],
        dbName: "red",
        user: "postgres",
        password: "password123",
        debug: !constants_1.__prod__,
    });
};
main();
console.log("Hello world");
//# sourceMappingURL=index.js.map