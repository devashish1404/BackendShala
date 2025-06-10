const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();

const app = express();

app.use(express.json());
connectDB();

app.get("/", (req,res) => res.send("API is Running...."));


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is runinng on port  ${PORT} `));