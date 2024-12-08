import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const apiKey = "";
const teamsURL = "https://api.balldontlie.io/v1/teams";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let teams = [];

app.get("/", async (req, res) => {
    try {
      const result = await axios.get(teamsURL, {
        headers: {
            'Authorization': `${apiKey}`
        }
      });
    // names for all 30 teams
    for (let i = 0; i < 30; i++) {
        teams.push(result.data.data[i].full_name)
    }
    // render the teams
    console.log(teams);
    res.render("index.ejs", { 
        teams: teams
    });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.post("/submit", async (req, res) => {
    try {
      const result = await axios.get(teamsURL, {
        headers: {
            'Authorization': `${apiKey}`
        }
      });
    // names for all 30 teams
    for (let i = 0; i < 30; i++) {
        teams.push(result.data.data[i].full_name)
    }
    // render the teams
    console.log(teams);
    res.render("index.ejs", { 
        teams: teams
    });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: error.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
