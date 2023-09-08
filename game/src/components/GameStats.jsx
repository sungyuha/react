import React from 'react';
import './GameStats.css';

const GameStats = ({gameStats}) => { // GameStats를 매개변수로 받아옴
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

export default React.memo(GameStats);