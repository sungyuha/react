import React from 'react';

// useBoard에서 borad를 가져옴
const Borad = ({board}) => {
    console.log("board", board);

    return (
        <div className='board'>
            {/* 게임 시작 화면 구성 보드 */}
            <p>Board</p>
        </div>
    );
}

export default Borad;