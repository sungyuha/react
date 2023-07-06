// 리스트 형태로 만든 엘리먼트들은 꼭 안정적이고 고유한 Key값을 가져야 함

import { useState } from "react";

function List() {
    const [inputValue, setInputValue] = useState('');
    // useState의 초기값으로 배열을 넣어줌
    const [list, setList] = useState(['밥먹기', '코딩하기']);

    // input 안에 있는 값을 가져다가 list 맨 위에 추가해주는 addToList 함수
    const addToList = () => {
        setList(prevList => {
            return [inputValue, ...prevList];
        });
        // input안에 들어있는 값 초가화
        setInputValue('');
    };

    return (
        <>
            <h2>List와 Key의 중요성</h2>
            <input 
                // input태그는 값으로 state값을 받음
                value={inputValue}
                // onChange속성으로 input값이 바뀔때마다 setInputValue가 불려서 inputValue에 값 저장
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addToList}>추가</button>
            <ul>
                {/* list에 map이라는 함수 사용해서 배열 안에 있는 항복들을 돌면서 li태그를 사용해서 화면에 출력 */}
                {list.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
        </>
    );
}

export default List;