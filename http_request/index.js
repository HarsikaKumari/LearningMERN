import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    console.log(req.raw);
});

app.listen(port, () => {
    // console.log(`The server is running on ${port}`);
})
