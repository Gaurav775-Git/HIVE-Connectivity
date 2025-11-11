const express = require("express");
const fs = require("fs");
const child_process = require("child_process");
const exec = child_process.exec;

const app = express();
app.use(express.json());

app.post("/run", (req, res) => {
  const { code } = req.body; // or we can write: const code = req.body.code;

  fs.writeFileSync("temp.js", code);
  
  exec("node temp.js", (err, stdout, stderr) => {
    if (err) {
      return res.status(500).send(`Error:\n${stderr}`);
    }
    res.send(stdout || "No output returned by code.");
    console.log(stdout);
  });

});

app.listen(5000, () => {
  console.log("Server is listening on 5000 port ");
});
