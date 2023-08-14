const mongoose = require('mongoose') ; 

const uri = "mongodb+srv://katkalesushmit1189:l9uTovZDCslpjxuf@cluster0.2zgyzek.mongodb.net/"; 

// l9uTovZDCslpjxuf
try {
  // Connect to the MongoDB cluster
  mongoose.set('strictQuery', false);
  mongoose.connect(
    uri ,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const db = mongoose.connection;
db.on("error", (err) => console.log(`Connection error ${err}`));
db.once("open", () => console.log("Connected to DB!"));

module.exports = db ; 
