import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todos";
const PORT = 3000;

const app = express();

app.use(json());

app.use("/todos", todoRoutes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  response.status(500).json({ message: error.message });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);

console.log("App started listening on port", PORT);
