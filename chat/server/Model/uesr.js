// 스키마 : 데이터의 설계도 같은 느낌!

const mongoose = require('mongoose');

// 내가 받을 데이터를 설명
const userSchema = new mongoose.Schema({
    name: { // 유저 이름
        type: String,
        require: [true, "User must type name"], // 사용자는 이름을 기억해애 해!
        nuique: true,
    },
    token: { // 연결 id 정보
        type: String
    }
});
module.exports = mongoose.module("User", userSchema);