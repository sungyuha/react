import React from 'react';
import Menu from './Menu';
import {useGameOver} from '../hooks/useGameOver';
import Tetris from './Tetris';

const Game = ({rows, columns}) => { // 매개변수로 받아옴
    // 게임 상태 확인해줄 커스텀훅
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    
    const start = () => {
        // 게임 오버 재설정
        setGameOver();

        // 게임 오버의 해당 값 변화 확인
        console.log(`Start gameOver is ${gameOver}`);
    };
    return (
        <div className='game'>
            {/* 게임 오버가 되면 / 게임이 시작되면 생김 */}
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                // 게임이 끝나지 않으면 / 행과 열 표시
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
            )}
        </div>
    );
}

export default Game;