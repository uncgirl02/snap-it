const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/snap-it", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => console.log("Conncted"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
