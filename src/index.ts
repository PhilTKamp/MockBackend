import express from "express";
import { generateQueryResults } from "./utils";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/ExecuteQuery", (req, res) => {
  res.send(generateQueryResults(10, 100));
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
