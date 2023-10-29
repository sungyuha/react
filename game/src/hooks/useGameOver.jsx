import { useCallback, useState } from 'react';

export const useGameOver = () => {
    // 게임 상태
    const [gameOver, setGameOver] = useState(true); //게임 시작화면, 즉시 시작하지 않으므로 true
    
    // 게임 재설정
    const resetGameOver = useCallback(() => {
        // 반환 된 함수를 클릭하면 게임 시작이 false, 버튼을 클릭하면 기본값인 true가 false로 변경
        setGameOver(false);
    }, []); // 빈 객체 전달

    // 게임 상태 반환
    return [gameOver, setGameOver, resetGameOver];
};