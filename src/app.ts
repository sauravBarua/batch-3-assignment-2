import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

// Express
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!!!!!");
});

export default app;
