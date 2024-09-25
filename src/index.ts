import express from "express";
import {
    generateAskQuestionResponse,
    generateGetQueryResponse,
    generateGetSourceResponse,
    generateExecuteQueryResponse,
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
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/ExecuteQuery", async (req, res) => {
    console.log("/ExecuteQuery called with body: ", req.body);

    await sleep(Math.random() * 3000);

    let ret = generateExecuteQueryResponse(10, 100);
    console.log("/ExecuteQuery response: ", ret);
    res.send(ret);
});

app.get("/GetSource", async (req, res) => {
    console.log("/ExecuteQuery called with body: ", req.body);

    await sleep(Math.random() * 3000);

    let ret = generateGetSourceResponse();
    console.log("/ExecuteQuery response: ", ret);
    res.send(ret);
});

app.get("/GetQuery", async (req, res) => {
    console.log("/ExecuteQuery called with body: ", req.body);

    await sleep(Math.random() * 3000);

    let ret = generateGetQueryResponse();
    console.log("/ExecuteQuery response: ", ret);
    res.send(ret);
});

app.get("/AskQuestion", async (req, res) => {
    console.log("/ExecuteQuery called with body: ", req.body);

    await sleep(Math.random() * 3000);

    let ret = generateAskQuestionResponse();
    console.log("/ExecuteQuery response: ", ret);
    res.send(ret);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
