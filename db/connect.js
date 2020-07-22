const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true  
    }) 
    console.log('MongoDB Connected!!!')
  } catch (e) {
    console.log('Error ' + e)
  }
}
 
module.exports = connectDB;