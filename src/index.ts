import express from "express";
import {
    generateAskQuestionResponse,
    generateDataSourceSummary,
    generateQueryResults,
    getQuerySummary,
    sleep,
} from "./utils";

const app = express();
const port = 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/ExecuteQuery", async (req, res) => {
    await sleep(Math.random() * 3000);
    res.send(generateQueryResults(10, 100));
});

app.get("/GetSource", async (req, res) => {
    await sleep(Math.random() * 3000);
    res.send(generateDataSourceSummary(10));
});

app.get("/GetQuery", async (req, res) => {
    await sleep(Math.random() * 3000);
    res.send(getQuerySummary());
});

app.get("/AskQuestion", async (req, res) => {
    await sleep(Math.random() * 3000);
    res.send(generateAskQuestionResponse());
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
