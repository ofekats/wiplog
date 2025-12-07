const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String],                 
  frontImage: String,               // front image
  tutorials: [String],              
  labels: [String],                 
  description: String,              
  todoList: [todoSchema],           
  status: {
    type: String,
    enum: ["future", "inProgress", "finished"],
    default: "future"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
