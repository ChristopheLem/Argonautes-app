const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Christophe:my-project@cluster0-ywms4.mongodb.net/MyCrew?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }); 
    console.log('MongoDB Connected!!!')
  } catch (e) {
    console.log('Error ' + e)
  }
}
 
module.exports = connectDB;