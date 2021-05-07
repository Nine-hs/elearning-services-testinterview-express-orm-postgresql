require("dotenv").config();
const route = require("./routes/");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/resource", route);

app.listen(process.env.PORT, () => {
    console.log("Server is Actived :", process.env.PORT);
})
