import React from 'react';
import './GameStats.css';

const GameStats = ({gameStats}) => { // gameStats를 받아옴
    // 게임 통게 구성 요소를 위한
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    // 완료 된 라인 수를 뺀 다음 레벨당 라인 수를 빼서 다음 레벨까지 남은 수를 설정
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        // 게임 통계 구성 요소
        <ul className='gameStats gameStats__left'>
            <li>Level</li>
            <li className='value'>{level}</li>
            <li>Line to level</li>
            <li className='value'>{linesToLevel}</li>
            <li>Points</li>
            <li className='value'>{points}</li>
        </ul>
    );
}

/**
 * React.memo는 리액트에서 제공하는 고차 컴포넌트: HOC -> 어떤 컴포넌트를 받아서 최적화된 컴포넌트를 반환해줌
 * React.memo는 필요할때만 사용!!
    - 컴포넌트가 같은 Props로 자주 랜더링 될 떄
    - 컴포넌트가 랜더링 될때마다 복잡한 로직을 처리해야 한다면 
    - 기억하기) React.memo는 오직 Props 변화에만 의존하는 최적화 방법!
*/
export default React.memo(GameStats); // GameStats의 Props 체크 -> {gameStats}에 변화가 있다면 랜더링 시키고, 아니면 랜더링X