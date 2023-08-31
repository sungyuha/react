import React from 'react';
import Menu from './Menu';

const Game = ({rows, columns}) => { // 매개변수로 받아옴
    const start = () => {console.log("start")};
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