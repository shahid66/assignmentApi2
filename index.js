const express=require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');
const { readdirSync } = require("fs");
const router = require('./src/routes/api');



// middlewares
app.use(helmet())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

// DB Connection
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("DB Error => ", err));

// routes middleware
app.use(router)

// server
const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`App is  running on port ${port}`);
});
