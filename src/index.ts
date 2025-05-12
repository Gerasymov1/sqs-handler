import express, { Express, Request, Response } from "express";
import pollSQS from "./handlers/sender";
const app: Express = express();
const port: number = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!@@");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  pollSQS();
});
