const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Project = mongoose.model("Project", ProjectSchema);

app.get("/projects", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});