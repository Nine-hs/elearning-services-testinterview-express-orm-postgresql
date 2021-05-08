require("dotenv").config()
const route = require("./routes/");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/resource", route);

app.listen(port, () => {
    console.log("Server is Actived :", port);
})
