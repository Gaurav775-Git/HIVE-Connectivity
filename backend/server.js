const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cors = require("cors");



const app = express();
const PORT = 3000;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "views")));
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

app.post("/upload", upload.single("codefile"), async (req, res) => {
  const filepath = path.join(__dirname, "uploads", req.file.filename);
  const code = fs.readFileSync(filepath, "utf-8");

  try {
    const workerUrl = "http://127.0.0.1:5000/run";
    const response = await axios.post(workerUrl, { code });

    // Send the worker's output cleanly as JSON
    res.json({ output: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/files", (req, res) => {
  fs.readdir("uploads", (err, files) => {
    if (err) return res.status(500).send("Error reading files");
    res.json(files);
  });
});

app.listen(PORT, () => {
  console.log(`listening to the port ${PORT}`);
});
