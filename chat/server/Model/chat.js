const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    { // 메세지 정보를 받아옴
        chat: String, // 메세지
        user: { // 메세지 보낸 유저 정보를 객체로 저장
            id: { // 유저의 아이디 값
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String, // 유저의 이름 값
        },
    },
    {timestamp:true}
);

module.exports = mongoose.module("Chat", chatSchema);