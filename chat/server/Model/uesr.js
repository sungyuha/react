// 스키마 : 데이터의 설계도 같은 느낌!

const mongoose = require('mongoose');

// 내가 받을 데이터를 설명
const userSchema = new mongoose.Schema({
    name: { // 유저 이름
        type: String,
        require: [true, "User must type name"], // 사용자는 이름을 기억해애 해!
        nuique: true,
    },
    token: { // 연결 id 정보, // 컴퓨터는 유저 정보엔 관심 없고, 어떤 연결 id로 들어왔는지가 더 관심 있음
        type: String,
    },
    online: { // 유저의 온라인 & 오프라인 상태 확인
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.module("User", userSchema);