import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

// Fill in your values for the 3 types of auth.
const yourUsername = "harsika";
const yourPassword = "shishir00";
const yourAPIKey = "5294f2ce-7289-465b-a937-06be1eb0e9f3";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  // Use axios to hit up the /random endpoint
try {
  const result = await axios.get(API_URL + "/random");
  res.render("index.ejs", {content: JSON.stringify(result.data)});
} catch (error) {
  res.status(404).send (error.message);
}
  });

app.get("/basicAuth", async (req, res) => {
  // Write your code here to hit up the /all endpoint
  try {
    const result = await axios.get(API_URL + "/all?page2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //Write your code here to hit up the /filter endpoint
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  try {
    const result = await axios.get(API_URL + "/secrets/2", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
