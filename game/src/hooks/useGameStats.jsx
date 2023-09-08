import { useState, useCallback } from 'react';

const buildGameStats = () => ({
    // 게임 통계 설정 값
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0
});


export const useGameStats = () => {
    const [gameStats, setGameStats] = useState(buildGameStats()); // 게임 통계를 빌드

    const addLinesCleard = useCallback(() => {}, [] );

    // 게임 통계로 행을 추가. 설정 된 게임 통계가 반횐X
    return [gameStats, addLinesCleard];
}