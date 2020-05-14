const mongoose = require('mongoose');
const password = "D0nt_know";
mongoose.connect(`mongodb+srv://varunv:${password}@cluster0-iribv.mongodb.net/ejamdb?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("DB is connected!!");
});

