import { Router } from "express";
import { methodsProductos as languageController } from "./../controllers/languaje.controllerProductos.js";


const routerProductos = Router();

routerProductos.get("/", languageController.getProductos);
routerProductos.get("/:id", languageController.getProducto);
routerProductos.post("/", languageController.addProducto);
routerProductos.put("/:id", languageController.updateProducto);
routerProductos.delete("/:id", languageController.deleteProducto);



export default routerProductos;

// nombre: "Miel Orgánica",
// marca: "Mielería del Valle",
// url: "https://i.imgur.com/dyKcKHb.jpg"