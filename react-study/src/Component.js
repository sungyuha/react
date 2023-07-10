import React from "react";

const Component = () => {
    return (
        /* 리액트가 정한 귀찮은 법칙, "리턴되는 모든 태그들은 하나의 최상위 태그로 감싸져야한다". 
        이거때문에 의미 없는 div 태그 대신, React.Fragment를 사용 */
        // React.Fragment 생략해서 작성 가능
        <>
            <h1>안녕하세요 리액트</h1>
            <p>반가워요</p>
        </>

        /* 
        React.Fragment 사용 끌팀! 
        1) CSS 스타일링 할때 - 특히 flexbox나 layout 스타일링을할 때
        2) table 처럼 정해진 구조를 따라야할 때 (중요)
        3) map() 사용시 Fragment에 key를 전달할 때
        */
    );
};

export default Component;