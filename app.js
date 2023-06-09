const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const productRouter = require('./routes/product');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoose = require("mongoose");

// app.use('/', indexRouter);
app.use('/api/v1/product', productRouter);

module.exports = app;
