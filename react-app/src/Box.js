import React, {useEffect, useState} from "react";

const Box = ( {createBoxStyle} ) => {
    // 맨 처음은 빈 오브젝트로 초기화를 시켜줌
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('박스 키우기 🎨');
        // useEffect는 createBoxStyle가 리턴한 값을 setStyle로 
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return <div style={style}></div>
};

export default Box;