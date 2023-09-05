import { useState } from 'react'
import { buildBoard } from '../business/Game-Board';

export const useBorad = ({rows, columns}) => {
    // 초기 보드 상태
    const [board] = useState(buildBoard({rows, columns})); // 함수를 호출하여 행과 열로 보드 제작

    // 초기 보드 설정의 종류를 반환
    return [board];
}