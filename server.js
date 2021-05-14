require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

//API Routes
const index = require("./routes/index");
const signup = require("./routes/signup");
const signin = require("./routes/signin");
const user_me = require("./routes/user_me");

//API Routes
app.use("/", index);
app.use("/", signup);
app.use("/", signin);
app.use("/", user_me);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// {
//     "username": "imRahul",
//     "firstname": "Rahul",
//     "lastname": "Mane",
//     "password" :"something123"
// }
