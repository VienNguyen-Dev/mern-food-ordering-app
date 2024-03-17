import express from "express";
import { createUser } from "../controllers/user.controller";
import { jwtCheck } from "../midleware/auth";

const router = express.Router();

router.post("/createUser", jwtCheck, createUser);

export default router;
