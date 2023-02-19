//Bringing in Mongoose
const mongoose = require('mongoose');

//setting up mongoose db
mongoose.connect('mongodb://localhost:27017/challenge18SocialApiDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;