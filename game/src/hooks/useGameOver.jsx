import { useCallback, useState } from 'react';

export const useGameOver = () => {
    // 게임 상태
    const [gameOver, setGameOver] = useState(true); //게임 시작화면, 즉시 시작하지 않으므로 true
    
    // 게임 재설정
    const resetGameOver = useCallback(() => {
        setGameOver(false);
    }, []);

    return [gameOver, setGameOver, resetGameOver];
};