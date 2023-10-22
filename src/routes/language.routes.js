import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router = Router();

router.get("/", languageController.getClientes);
router.get("/:id", languageController.getCliente);
router.post("/", languageController.addCliente);
router.put("/:id", languageController.updateCliente);
router.delete("/:id", languageController.deleteCliente);

export default router;
