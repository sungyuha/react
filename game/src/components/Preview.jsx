import React from 'react';
import builBoard from '../business/Board';
import BoardCell from './BoardCell';
import transferToBoard from '../business/transferToBoard';

const Preview = ({tetromino, idx}) => { 
    // 모양이 있어야하고, 클래스 이름이 있어야 함
    const {shape, className} = tetromino;

    // 4행 4열의 보드를 만들고 테트리스 조각 미리보기에 넣어진 조그마한 보드
    const board = builBoard({rows: 4, columns: 4});

    // 랜더링 되는 미리보기에 따라 상단에 배치 -> 겹치지 않게 하기 위해 스타일은 동적으로 표시
    const style = {top: `${idx * 15}vw`};

    // 미리보기를 사용하고 있는 테트리스 조각을 보드로 아래 하단과 같이 전송
    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: { row: 0, column: 0 },
        rows: board.rows,
        shape
    });

    return (
        <div className='piece_preview' style={style}>
            <div className='preview-board'>
                <BoardCell />
            </div>
        </div>
    );
}

// React.memo를 사용하여 구성요소를 반환
export default React.memo(Preview);