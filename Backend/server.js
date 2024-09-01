const app = require('./app');

// 1) CREATE & LISTEN TO SERVER
app.listen(8000, () => {
    console.log("App running on port 8000");
});

// 2) DATABASE CONNECTION
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SmartHooverLTD", { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("Connection to database initialized."));