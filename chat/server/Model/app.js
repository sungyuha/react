// 데이터베이스에 연결

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// mongoose를 통해서 연결
mongoose.connect("데이터베이스 주소", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connected to database")); // 위의 주소로 연결 완료되면 connected to database 출략

module.exports = app;