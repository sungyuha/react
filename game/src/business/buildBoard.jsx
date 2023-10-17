import {defaultCell} from '../business/Cell';
import { transferToBoard } from '../business/tetromino';

export const buildBoard = ({ rows, columns }) => {
    // 게임 보드 행에 필요한 배열을 만들고 싶은 행과 열을 가져온 다음에 각 행에 대해 배열을 만듬
    const builtRows = Array.from({ length: rows }, () =>
        // 열을 나타냄. 또한 보드에 각 열에 기본 셀을 설정
        Array.from({ length: columns }, () => ({ ...defaultCell })) // defaultCell: 기본셀
    );

    return {
        // 보드를 반환하며, 보드에는 행이 포함
        rows: builtRows,
        // 행과 열을 포함을 크기를 지정
        size: { rows, columns }
    };
};
// 빈 보드를 만들기 위한 작은 함수
const findDropPosition = ({ board, position, shape }) => {
    let max = board.size.rows - position.row + 1;
    let row = 0;
}

// 테트리스 플레이어의 위치에 액세스
export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player;

    // 테트리스 조각이 사용하는 공간을 복사하고 삭제
    // 충돌한 적도 없고 영구적으로 공간을 점유한 적도 없음
    let rows = board.rows.map((row) =>
        row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
    );

    // 테트리스 조각이 떨어지는 위치
    const dropPosition = findDropPosition({
        board,
        position,
        shape: tetromino.shape
    });

    // 배치
    const className = `${tetromino.className} ${
        player.isFastDropping ? "" : "ghost"
    }`;
    rows = transferToBoard({
        className,
        isOccupied: player.isFastDropping,
        position: dropPosition,
        rows,
        shape: tetromino.shape
    });
}