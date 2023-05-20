const express = require('express');
const { initDB } = require('./dbConfig');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/authRouter');
const detailRouter = require('./routes/detailesRouter');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

initDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/', authRouter);
app.use('/detailes', detailRouter);



app.listen(8000, () => {
    console.log("server started successfully")
});