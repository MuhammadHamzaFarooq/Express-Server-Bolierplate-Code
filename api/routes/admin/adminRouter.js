import { Router } from "express";
import adminController from "../../../controllers/admin/adminController.js";

const AdminRouter = Router();

const path = "/admin";

AdminRouter.get(`${path}/dummy`, adminController.dummy);

export { AdminRouter };
