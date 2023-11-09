// 웹소켓 서버
const {createServer} = require("http");
const app = require("./app");
// 웹소켓
const {Server} = require("socket.io");
require("dotenv").config();
// DB연결
const httpServer = createServer(app);
// 웹소켓 -> io는 통상적으로 자주 사용하는 웹소켓 약어
const io = new Server(httpServer, {
    cors: {
        // 클라이언트 주소===프론트엔드
        origin: "http://localhost:3000"
    },
});

// 포트 넘버 오픈
httpServer.listen(process.env.PORT, () => {
    console.log("Server listening on port", process.env.PORT);
});