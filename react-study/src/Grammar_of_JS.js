// 리액트에서 자주 사용하는 자바스크립트 문법

// 1. 객체 할당
// ex. 일반적인 객체 할당 형태
let name = "yh";
let age = 25;

// 객체
let person = {
    name: name,
    age: age
};

console.log(person);

// ex. 줄여서 사용하는 객체 할당 형태
let name2 = "yh";
let age2 = 25;

// 객체
// 키와 키값에 들어가는 변수의 이름이 같다면 하단과 같이 사용 가능
let person2 = {
    name2,
    age2
};

console.log(person2);

// 2. 구조 분해 할당
let person3 = {
    name3: "yh",
    age3: 23
};

// 일반적인 형태
/*let name3 = person3.name3;
let age3 = person3['age3'];*/

// 변수의 값만 가져오고 싶을 때, 줄여서 사용 가능
let {name3, age3} = person3;

console.log(name3, age3);