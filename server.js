const express = require("express");
const app = express();
const PORT = 8081;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
