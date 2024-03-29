import React from 'react';
import './Tetris.css';
import Board from './Board';
import GameStats from './GameStats';
import Previews from './Previews';
import {useBorad} from '../hooks/useBorad';
import {useGameStats} from '../hooks/useGameStats';
import {usePlayer} from '../hooks/usePlayer';

const Tetris = ({rows, columns, setGameOver}) => { // game에서 매개변수로 받아옴
    const [gameStats, addLinesCleared] = useGameStats();
    
    // 플레이어 설정 추가
    // const player = {tetrominoes: []} // tetrominoes는 빈 객체와 같음
    const [player, setPlayer, resetPlayer] = usePlayer();

    // 게임 구성 보드를 확인해줄 커스텀훅
    const [board, setBoard] = useBorad({
        rows,
        columns,
        player,
        resetPlayer,
        addLinesCleared // 줄이 지워지는 것을 처리
    }); // 보드에 사용 될 행과 열이 필요해서 전달
    
    return (
        <div className='tertis'>
            {/* 게임 시작 버튼 클릭하면 화면 게임 화면으로 전환 */}
            {/* 게임 실행 구성 보드 / 테트리스는 보드를 반환 */}
            {/* 게임 보드를 전달 */}
            <Board board={board} />
            {/* 게임 통계 */}
            <GameStats gameStats={gameStats} />
            {/* 테트리스 조각 미리보기 -> 프리뷰 */}
            <Previews tetrominoes={player.tetrominoes} /> {/** 플레이에게 보여지는 tetrominoes */}
        </div>
    );
}

export default Tetris;