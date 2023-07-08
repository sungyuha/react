import { useState } from "react";

function List() {
    const [inputValue, setInputValue] = useState('');
    // useState의 초기값으로 배열을 넣어줌
    /* 
    중복 된 key가 아닐 때 사용
    const [list, setList] = useState(['밥먹기', '코딩하기']);
    */ 
    const [list, setList] = useState([
        {
            id: 1,
            value: '밥먹기'
        },
        {
            id: 2,
            value: '코딩하기'
        },    
    ]);

    // input 안에 있는 값을 가져다가 list 맨 위에 추가해주는 addToList 함수
    const addToList = () => {
        setList((prevList) => {
            // 각 항목의 key값은 고유해야 함
            return [{
                // id는 list에 + 1 더하기(이렇게 하면 숫자열이니 되니 빈 문자열 더함)
                // id값을 문자열로 
                id: list.length + 1 + "",
                // 값은 inputValue
                value: inputValue,
            }, 
            ...prevList];

            /* 중복 된 key가 아닐때 사용
            return [inputValue, ...prevList]; */
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
                    /*
                    1) 현재는 list 안에 key 값을 넣지 않아서 오류 발생
                    2) 돔 요소에서 어떤 항복이 업데이트 됐는지 알 수 없어서 모든 항목들을 전부 업데이트 함ㄴ
                    return <li>{item}</li>
                    */
                    
                    // 각 항목에 key값을 넣어줌
                    // 리스트 형태로 만든 엘리먼트들은 꼭 안정적이고 고유한 Key값을 가져야 함(중요!)
                    return <li key={item.id}>{item.value}</li>;
                    // 작성한 요소만 업데이트 해줌
                    // 리액트가 각 항목의 key를 가지고 있기 때문! 어떤 항목이 변경 및 변경 되지 않았는지 알 수 있음
                
                    /*
                        {list.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        }        
                        key 값으로 Index을 사용하면 디버깅으로 힘들어지는 이유!!
                        1) 전체 항목이 돔 상에서 업데이트 됨
                        2) index라는 값은 안정적이지 않음
                        3) 리액트는 키 값이 안정적이지 않는 것을 아니까 전체 항목이 업데이트 됨
                        4) 변경 될 수 있는 리스트가 있으면 index 값을 key로 넣어주면 좋지 않음
                        5) 동 적인 리스트를 만들 때는 index를 key값으로 사용하는건 지양

                        - 버그 같은 상황(디버깅 필요!!)
                        {list.map((item, index) => {
                            return (
                                <div>
                                    <li key={index}>{item}</li>
                                    <input />
                                </div>
                                // 버그 같은 현상이 발생
                                // index값이 안정적이지 않아서 발생하는 상황을 알지 못했다면 디버깅이 오래 걸럈을 오류 상황
                            );
                        }
                    */

                    /*
                        - 중복 된 key로 인한 문제점
                        {list.map(item) => {
                            1) 하나의 키 안에 중복 되는 자식은 버그 같은 상황이 발생
                            2) 중복 된 키를 가지고 있으면 자녀가 복제될 수 있고, 업데이트가 이상하게 됨 
                            return <li key={item}>{item}</li>
                        })}
                    */    
                })}
            </ul>
        </>
    );
};

export default List;