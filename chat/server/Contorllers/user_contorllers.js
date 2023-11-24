// 유저 정보 저장
const User = require('../Model/uesr');
const userContorller = {}

userContorller.saveUser = async(userName, soid) => {
    // 이미 있는 유저 정보 확인
    let user = await User.findOne({name: userName}); // User 정보에서 이름이 userName 이면 찾기

    // 없다면 새로운 유저 정보 생성
    if(!user) {
        user = new User({ // 새로운 유저
            name: userName, // 이름
            token: soid, // 토큰
            online: true
        });
    }
    // 이미 있는 유저라면 연결 정보 token 값만 변경
    user.token = soid; // 기본에 있는 토큰값만 변경
    user.online = true;

    await user.save(); // 유저 정보 저장
    return user;    
};

module.exports = userContorller;