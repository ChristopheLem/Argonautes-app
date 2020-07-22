const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 2) {
        throw new Error(`Member's name is not long enough`)
      }
    }
  }
})