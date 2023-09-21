import { useState, useCallback } from 'react';

import { randomTetromino } from '../business/Tetromino';

const buildPlayer = (previous) => {
    let tetrominoes;

    if (previous) {
        tetrominoes = [...previous.tetrominoes];
        tetrominoes.unshift(randomTetromino());
        } else {
        tetrominoes = Array(5)
            .fill(0)
            .map((_) => randomTetromino());
        }
    
    return {
        collided: false,
        isFastDropping: false,
        position: { row: 0, column: 4 },
        tetrominoes,
        tetromino: tetrominoes.pop()
    };
};

// 플레이어 훅을 내보냄
export const usePlayer = () => {
    // buildPlayer를 사용하여 값을 제공
    const [player, setPlayer] = useState(buildPlayer());

    // 재 입력 플레이어는 사용자가 필요할 때 값이 호출
    const resetPlayer = useCallback(() => {
        // 플레이어의 이전 값을 가져와 플레이어 빌드에 전달
        setPlayer((prev) => buildPlayer(prev));
    }, []);

    // 업데이트 하고 싶은 항목을 업데이트 한 후 모든 정보를 반환
    return [player, setPlayer, resetPlayer]; // 플레이어 설정할 수 있는 기능 반환, 플레이어 재설정 기능
};