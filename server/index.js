const users = require("./routes/user_info");
const connection = require("./database");
const cors = require("cors");
const express = require("express");
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/user_info", users);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));