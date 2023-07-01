import { useEffect, useState } from "react";

export function useFetch(baseUrl, initialType) { // 매개변수로 전달
    const [data,setData] = useState(null);

    /* 
    1) 함수 fetchUrl
    2) fetchUrl은 type이라는 매개변수를 받음
    3) // type에는 user가 올 수도 있고, post가 올 수도 있음
    */
    const fetchUrl = (type) => { // * 예들들면 users 버튼을 클릭하면 매개변수 type에는 users의 정보
        // users 정보
        fetch(baseUrl + '/' + type)
        // 가져온 데이터를 json 형태로 변환
        .then(res => res.json())
        // setDate로 useState에 넣어줌
        // setDate로 안에다가 users 정보 넣어줌
        .then(res => setData(res));
    };

    useEffect(() => {
        fetchUrl(initialType); // 맵처음에 불릴 useEffect의 fetchUrl 인자로 initialType
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // useCallback으로 경고 메시지 없애기

    // 콘설에 출력
    //console.log(data);

    return {
        // 객체 형태로 반환
        data,
        fetchUrl,
    };
}