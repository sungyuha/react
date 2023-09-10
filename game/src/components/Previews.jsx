import React from 'react';
import Preview from './Preview';

const Previews = ({tetrominoes}) => { // tetrominoes를 가져옴
    // 마지막 테트리스 조각을 제외한 모든 것을 원함
    const PreviewTetrominoes = tetrominoes
        // 플레이어가 사용하고 있는 테트리스 조각은 보고 싶지않아서 제외하고 화면에 출력
        .slice(1 - tetrominoes.length)
        .reverse();

    return (
        <>
            {/* 데이터가 변경 될 때 데이터 랜더링 */}
            {/* 각 개별 테트리스 조각에 대해 개별 미리보기를 모두 반환 */}
            {PreviewTetrominoes.map((tetromino, idx) => (
                /** 주어진 idx의 각 테트리스 조각에 대해 해당 테트리스의 미리보기를 idx값으로 랜더링  */
                <Preview tetromino={tetromino} index={idx} key={idx} />
            ))}
        </>
    );
}

// React.memo를 사용하여 구성요소를 반환
export default React.memo(Previews);