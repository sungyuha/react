import defaultCell from './Cell';

export const buildBoard = ({rows, columns}) => {
    // 게임 보드 행에 필요한 배열을 만들고 싶은 행과 열을 가져온 다음에 각 행에 대해 배열을 만듬
    const builtRows = Array.from({length: rows}, () => 
    // 열을 나타냄. 또한 보드에 각 열에 기본 셀을 설정
        Array.from({length: columns}, ()=> ({ ...defaultCell}))
    );
    return {
        // 보드를 반환하며, 보드에는 행이 포함
        rows: builtRows,
        // 행과 열을 포함을 크기를 지정
        size: { rows, columns}
    };
}

// 빈 보드를 만들기 위한 작은 함수