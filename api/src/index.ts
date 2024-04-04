import express from "express";
import router from "./routes";
import { config } from "dotenv";
import cors from "cors";
config();

const app = express();

const cors_option = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE", "UPDATE", "PATCH", "PUT"],
};

app.use(cors(cors_option));
app.use(express.json());
app.use("/", router);

app.listen(5000, () => {
  console.log("Server is runnig at http://localhost:5000");
})