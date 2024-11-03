const express = require("express");
const app = express();
const PORT = 3000;

// Define the /message endpoint
app.get("/message", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
