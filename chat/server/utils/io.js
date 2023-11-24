// 통신 관련 된 함수
module.exports = function(io) { // io를 매개변수로 받아옴
    io.on("connection", async(socket) => {
        console.log("client is connected", socket.id);

        socket.on('login', async(userName, callback) => { // login 연결
             // 받은 유저 정보를 저장하고 소켓 아이디 저장
        });
        

        socket.on('disconnect', () => { // 연결
            console.log('user is disconnect');
        });
    });
};