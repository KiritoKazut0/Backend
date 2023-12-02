import express from "express";
import morgan from "morgan";
import cors from "cors"
// Routes
import routerCliente from "./routes/language.routes.js"
import routerProductos from "./routes/languaje.routesProductos.js";
import fileUpload from "express-fileupload";
import { upload } from "./routes/upload.js";
import conf from "./config.js";
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(fileUpload());
// Routes
app.use("/upload",upload);
app.use("/api/cliente", routerCliente);
app.use("/api/producto", routerProductos);

app.listen(conf.port, ()=> {
    console.log(`Server on port ${conf.port}`);
})
