require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("uploads"));

// add after 'const app = express();'



mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(() => console.log("Connected to b the db!"))
.catch((err) => console.log(err));

app.use("/api/post", require("./routes/routes"));

app.listen(port, () => console.log(`server running at http://localhost:${port}`));
