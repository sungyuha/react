import React from 'react';
import './Tetris.css';
import Borad from './Borad';
import {useBorad} from '../hooks/useBorad';

const Tetris = ({rows, columns, setGameOver}) => { // game에서 매개변수로 받아옴
    // 게임 구성 보드를 확인해줄 커스텀훅
    const [board, setBoard] = useBorad({rows, columns}); // 보드에 사용 될 행과 열이 필요해서 전달

    return (
        <div>
            {/* 게임 시작 버튼 클릭하면 화면 게임 화면으로 전환 */}
            {/* 게임 실행 구성 보드 / 테트리스는 보드를 반환 */}
            {/* 게임 보드를 전달 */}
            <Borad board={board} />
        </div>
    );
}

export default Tetris;