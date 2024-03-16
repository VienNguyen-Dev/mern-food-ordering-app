import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
  console.log("Contected to mongoBD");
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.use("/api/my/user", userRoutes);

app.listen(7000, () => {
  console.log(" Server started on localhost:7000");
});
