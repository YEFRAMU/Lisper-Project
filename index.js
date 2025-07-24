import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_Random = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_Random);
    const result = response.data;
    res.render("index.ejs", {
      secret: result.secret,
      user: result.username,
    });
  } catch (error) {
    console.log("Error fetching data:", error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
