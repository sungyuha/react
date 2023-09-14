export const transferToBoard = ({
    // 클래스이름, 보드의 공간을 차지하지 않는지, 테트리스 조각 모양의 보드 내 위치는 무엇인지
    className,
    isOccupied,
    position,
    rows,
    shape
    }) => {
    // 각 셀을 통과. 
    shape.forEach((row, y) => {
        // 각 행에서 모양을 살펴보고 각 행에 대해 각 열을 살펴봄
        row.forEach((cell, x) => {
            // 기본적으로 셀이 있고 셀이 채워져 있거나 거기에 어떤것이 있으면 값을 설정
            // 값이 제대로 전달되는지 확인
            if (cell) {
                const occupied = isOccupied;
                // y와 x 위치에 현재 행과 열을 더한 값으로 설정
                const _y = y + position.row;
                const _x = x + position.column;
                rows[_y][_x] = { occupied, className };
            }
        });
    });

    return rows;
};