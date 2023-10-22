import { rotate } from './business/Tetrominoes';

// 플레이 컨트롤러
const attemptRotation = ({ board, player, setPlayer }) => {
    const shape = rotate({
        piece: player.tetromino.shape,
        direction: 1
    });
}    