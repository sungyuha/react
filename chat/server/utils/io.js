// 통신 관련 된 함수
module.exports = function(io) { // io를 매개변수로 받아옴
    io.on("connection", async(socket) => {
        console.log("client is connected", socket.id);
    });
};