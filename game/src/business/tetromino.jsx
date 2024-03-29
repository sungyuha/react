const className = 'tetromino';

// 테트리스 조각
export const TETROMINOES = {
    I: { // I는 기본적인 기능
        shape: [
        // 열에 대한 4개의 값
        // 0이 있는 곳은 없는 곳, 1이 있는 곳은 실제 객체가 있음
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
        ],
        className: `${className} ${className}__i`
    },
    J: { // J모양
        shape: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
        ],
        className: `${className} ${className}__j`
    },
    L: { // L모양
        shape: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
        ],
        className: `${className} ${className}__l`
    },
    O: { // ㅁ모양
        shape: [
        [1, 1],
        [1, 1]
        ],
        className: `${className} ${className}__o`
    },
    S: { // S모양
        shape: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
        ],
        className: `${className} ${className}__s`
    },
    T: { // T모양
        shape: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
        ],
        className: `${className} ${className}__t`
    },
    Z: { // 지그재그 모양
        shape: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
        ],
        className: `${className} ${className}__z`
    }
};

// 모든 TETROMINOES에 대한 키를 가져가면 됨
// t-z-i-j-s 이를 키로 저장하면 
export const randomTetromino = () => {
    const keys = Object.keys(TETROMINOES);
    // 임의의 숫자를 생성하여 여기에 있는 키의 마지막 index에 제공
    const index = Math.floor(Math.random() * keys.length);
    // 그리고 키 중에서 index 위치에서 실제 keys를 찾아야 함
    const key = keys[index];
    // 예를들면 T의 key를 찾으라 하면 t로 반환
    return TETROMINOES[key];
};

export const rotate = ({ piece, direction }) => {
    // 컬럼의 행과 열을 바꾸기
    const newPiece = piece.map((_, index) =>
        piece.map((column) => column[index])
    );

    // 행을 뒤집어 회전 된 행을 얻음
    if (direction > 0) return newPiece.map((row) => row.reverse());

    return newPiece.reverse();
};

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