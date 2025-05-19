import express, { urlencoded, json } from "express";
import router from "./routes/index.route.ts";
import dotenv from "dotenv";
import { prisma } from "./config/db.ts";

const port = process.env.PORT || 8000;
const app = express();
dotenv.config();
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
