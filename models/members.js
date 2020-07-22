const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
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

mongoose.model('Member', MemberSchema)