import React from 'react';
import BoardCell from './BoardCell';

// useBoard에서 borad를 가져옴
const Board = ({board}) => {
    console.log("board", board);

    // 보드의 전체 행과 열을 보고 css 그리드를 설정
    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`, // 각 슬롯에 대해 균등한 크기의 셀
        gridTemplateColums: `repeat(${board.size.columns}, 1fr)`
    };

    return (
        // 클래식 보드가 있는 div에는 위에서 만든 스타일을 포함
        <div className='board' style={boardStyles}> 
            {/* 게임 시작 화면 구성 보드 */}
            {/* <p>Board</p> */}

                {board.rows.map((row, y) =>
                    // 각 각의 셀에 필요한 키를 제공 -> 기본셀, 셀 번호, 
                    row.map((cell, x) => (
                      <BoardCell key={x * board.size.columns + x} cell={cell} />
                    ))
                )}
        </div>
    );
}

export default Board;