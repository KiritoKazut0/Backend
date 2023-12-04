import { config } from "dotenv";

config();

const conf = {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    port: process.env.PORT || 3000
};

//console.log(conf)
export default conf;
