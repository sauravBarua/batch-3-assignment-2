import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";

// Express
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!!!!!");
});

export default app;
