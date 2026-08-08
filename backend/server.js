const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const imageRoutes = require("./routes/image.routes");

const authRoutes = require("./routes/auth.routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/image", imageRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});