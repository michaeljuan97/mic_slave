const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process")

const app = express();
var corsOptions = {
    // origin: "http://127.0.0.1:7778"
    origin: "*" //biar bisa di akses di network
  };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to IOT-OEE application." });
  });

app.post("/hello",(req,res) => {
  res.send("Post req to server")
})

app.post("/set_red",(req,res) => {
  res.send("Calling C prgram")
  // exec("./IO/main", (error, stdout, stderr) => console.log(stdout))
  exec(".\IOy\main.exe", (error, stdout, stderr) => console.log(stdout)) //main.exe bcos this is windows
})

  const PORT = process.env.PORT || 7777;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });