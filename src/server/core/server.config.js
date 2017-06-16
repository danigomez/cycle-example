import path from "path";

/* Server configuration */
const ROOT_DIR = path.resolve(__dirname, "../..");

const serverConfig = {
    PORT: process.env.PORT || 9001,
    PUBLIC_STATIC_CONTENT_DIR: ROOT_DIR + "/public",
    ROOT_DIR: ROOT_DIR
};

export default serverConfig;