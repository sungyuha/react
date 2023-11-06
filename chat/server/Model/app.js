// 데이터베이스에 연결

const express = require("express");
const mongoose = require("mongoose");
// .env 사용하기 위해 설정
require('dotenv').config();
const app = express();

// mongoose를 통해서 연결
// mongoose.connect("데이터베이스 주소", { 
mongoose
    .connect("process.env.DB", { // DB를 읽어옴
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database")); // 위의 주소로 연결 완료되면 connected to database 출략

module.exports = app;