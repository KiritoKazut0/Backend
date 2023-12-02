import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller.js";


const routerCliente = Router();


routerCliente.get("/", languageController.getCliente);
routerCliente.put("/:id", languageController.updateCliente);




export default routerCliente;
