// example.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exampleSchema = new Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
