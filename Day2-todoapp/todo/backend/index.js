const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const TodoModel = require("./Models/Todo.model");

const app = express();
app.use(cors());
app.use(express.json());
app.listen(3001, () => {
  console.log("server is running"); //this prints only on console of backend
});

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  TodoModel.findByIdAndUpdate(id, { done: true })
    .then((update) => {
      res.json(update);
    })
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  console.log("req recd");
  const id = req.params.id;
  TodoModel.findByIdAndDelete(id)
    .then((update) => {
      res.json(update);
    })
    .catch((err) => res.json(err));
});
