import userContorller from '../Contorllers/user_contorllers';

// 통신 관련 된 함수
module.exports = function(io) { // io를 매개변수로 받아옴
    io.on("connection", async(socket) => {
        console.log("client is connected", socket.id);

        socket.on('login', async(userName, cb) => { // login 연결
            // 에러 핸들링
            try { // 괜찮은 케이스
                // 받은 유저 정보를 저장하고 소켓 아이디 저장
                const user = await userContorller.saveUser(userName, socket.id);
                cb({ok:true, deta:user}) // cb: 콜백함수
            } catch(error) { // 에러 케이스
                cb({ok: false, error:error.massage}) // 콜백함수 재호출 -> 에러메시지 출력
            }
        });
        

        socket.on('disconnect', () => { // 연결
            console.log('user is disconnect');
        });
    });
};