import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "shishir",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("select country_code from visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

//Get home page:-
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", {countries: countries, total: countries.length});
});

//post data:-
app.post("submit", async(req, res) => {
  const addInfo = await db.query ("insert into visited_countries values($1)()")
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
