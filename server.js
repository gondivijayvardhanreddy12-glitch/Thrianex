const express = require("express");

const app = express();

app.get("/projects", (req, res) => {
    res.json([
        {
            title: "Portfolio Website",
            description: "Full stack project"
        },
        {
            title: "Chatbot",
            description: "Python chatbot"
        }
    ]);
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});  