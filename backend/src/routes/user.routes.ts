import express from "express";
import UserController from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../midleware/auth";
import { validateMyUSerRequest } from "../midleware/validation";

const router = express.Router();

router.post("/createUser", jwtCheck, UserController.createCurrentUser);
router.put("/updateUser", jwtCheck, jwtParse, validateMyUSerRequest, UserController.updateCurrentUser);
router.get("/getUser", jwtCheck, jwtParse, UserController.getCurrentUser);

export default router;
