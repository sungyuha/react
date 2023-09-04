import React from 'react';
import './Tetris.css';
import Borad from './Borad';
import {useBorad} from '../hooks/useBorad';

const Tetris = ({rows, columns, setGameOver}) => { // game에서 매개변수로 받아옴
    // 게임 구성 보를 확인해줄 커스텀훅

    return (
        <div>
            {/* 게임 시작 버튼 클릭하면 화면 게임 화면으로 전환 */}
            {/* 게임 실행 구성 보드 / 테트리스는 보드를 반환 */}
            <Borad />
        </div>
    );
}

export default Tetris;