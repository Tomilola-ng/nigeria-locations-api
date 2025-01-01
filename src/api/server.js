const express = require("express");
const cors = require("cors");
const path = require("path");
const locationRoutes = require("./routes/locations");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "html")));

app.use("/api", locationRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "landing-page.html"));
});

app.use((req, res, next) => {
  if (req.accepts("html")) {
    res.status(404).sendFile(path.join(__dirname, "html", "landing-page.html"));
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
