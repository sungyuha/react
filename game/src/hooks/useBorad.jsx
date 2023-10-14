import { useState, useEffect } from 'react'
import { buildBoard, nextBoard } from '../business/buildBoard';

export const useBorad = ({
        rows,
        columns,
        player,
        resetPlayer,
        addLinesCleared
    }) => {
    // 초기 보드 상태
    const [board] = useState(buildBoard({rows, columns})); // 함수를 호출하여 행과 열로 보드 제작
    
    useEffect(() => {
        // 보드를 업데이트
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared
            })
        );
        // 상태 중 하나가 플레이어를 재설정하거나 라인이 지워질때마다 보드를 업데이트
    }, [player, resetPlayer, addLinesCleared]); // 이 값들은 변경 되어선 안됨
    // 초기 보드 설정의 종류를 반환
    return [board];
}