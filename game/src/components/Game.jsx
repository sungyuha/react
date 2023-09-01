import React from 'react';
import Menu from './Menu';
import {useGameOver} from '../hooks/useGameOver';

const Game = ({rows, columns}) => { // 매개변수로 받아옴
    // 게임 상태 확인해줄 커스텀훅
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    
    const start = () => {
        console.log("start")
    };
    return (
        <div className='game'>
            {/* 게임이 시작되면 생김 */}
            <Menu onClick={start} />
            {/* 행과 열 표시 */}
            <p>rows {rows}, columns {columns}</p>
        </div>
    );
}

export default Game;