import { hasCollision, isWithinBoard } from "./business/Board";
import { rotate } from './business/Tetrominoes';

// 플레이 컨트롤러
const attemptRotation = ({ board, player, setPlayer }) => {
    const shape = rotate({
        piece: player.tetromino.shape,
        direction: 1
    });

// 플레이어 포지션
const position = player.position;
    const isValidRotation =
        isWithinBoard({ board, position, shape }) &&
        !hasCollision({ board, position, shape });

    if (isValidRotation) {
        setPlayer({
            ...player,
            tetromino: {
            ...player.tetromino,
            shape
        }
        });
    } else {
        return false;
    }
};

// 움직이는 플레이어일때
export const movePlayer = ({ delta, position, shape, board }) => {
    const desiredNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column
    };
}