import React from 'react';
import './Tetris.css';
import Board from './Board';
import {useBorad} from '../hooks/useBorad';
import GameStats from './GameStats';
import {useGameStats} from '../hooks/useGameStats';

const Tetris = ({rows, columns, setGameOver}) => { // game에서 매개변수로 받아옴
    const [gameStats, addLinesCleard] = useGameStats();
    // 게임 구성 보드를 확인해줄 커스텀훅
    const [board, setBoard] = useBorad({rows, columns}); // 보드에 사용 될 행과 열이 필요해서 전달

    return (
        <div className='tertis'>
            {/* 게임 시작 버튼 클릭하면 화면 게임 화면으로 전환 */}
            {/* 게임 실행 구성 보드 / 테트리스는 보드를 반환 */}
            {/* 게임 보드를 전달 */}
            <Board board={board} />
            {/* 게임 통계 */}
            <GameStats gameStats={gameStats} />
        </div>
    );
}

export default Tetris;