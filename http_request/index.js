import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World !!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h3>Hello every one welcome to the about page, it is the page made with the express.</h3>");
});

app.get("/contact", (req, res) => { 
    res.send("<h2>You can contact me on xxxxxxxx.</h2>")
});

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
})
