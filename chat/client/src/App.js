import { useEffect, useState } from 'react';
import './App.css';
import socket from './server';

function App() {
  const [user, setUser] = useState; // 유저 정보 저장
  useEffect(() => {
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt('당신의 이름을 입력하세요'); // 웹 사이트에 이름을 입력해서 로그인하면 프롬프트 호출
    console.log('uuu', userName);

    socket.emit('login', userName, (res) => { // emit(대화의 제목, 보낼내용, 콜백함수)
      if(res?.ok) {
        setUser(res.data) // 맞으면 setUser정보을 받은 res.data값으로 저장
      }
    }) // emit함수가 잘 처리가되면 마지막에 콜백함수로 응답 받음
  };

  return (
    <div>
      
    </div>
  );
}

/* 
  1. 백엔드: 데이터베이스 셋팅, 웹소켓 셋팅
    - 저장하고 싶은 데이터는 딱 2가지! -> 1) 유저 정보, 2) 채팅 메세지 정보
  2. 프론트엔드 : 웹소켓 셋팅
  3. 백엔드, 프론트엔드 연결 테스트
  4. 유저 로그인
  5. 메세지 주고받기(서로 다른 브라우저로 접속해서)
*/

export default App;