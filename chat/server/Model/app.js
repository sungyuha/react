// 데이터베이스에 연결
// 서버는 모두에게 접근을 허락하지 않음!

// nodemon : 파일에 변화가 생기면 자동으로 리로딩을 해줌

const express = require("express");
const mongoose = require("mongoose");
// .env 사용하기 위해 설정
require('dotenv').config();
// 테스트용만 클라이언트 접근 허용
const cors = require("cors");
const app = express();
app.use(cors()); // 어떤 주소로는 접근을 허용

// mongoose를 통해서 연결
// mongoose.connect("데이터베이스 주소", { 
mongoose
    .connect("process.env.DB", { // DB를 읽어옴
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database")); // 위의 주소로 연결 완료되면 connected to database 출략

module.exports = app;