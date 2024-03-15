const express = require("express");
const db = require("./infrastructure/db");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoutes");
const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sync();

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
