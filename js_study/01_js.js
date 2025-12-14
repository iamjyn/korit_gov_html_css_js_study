// 변수 선언 => let, const(상수)
let name = "홍길동";
console.log(name);
name = "김길동";
console.log(name);

const age = 20;
console.log(age);
// age = 10
// console.log(age)

// 연산자
let data1 = 10;
let data2 = "10";

// 동등연산자
let result = data1 == data2; // == 값 비교
console.log(result);

// 일치연산자
let result2 = data1 === data2; // === 값, 타입 비교
console.log(result2);

// 타입 확인
console.log(typeof data1, typeof data2);

console.log("1" + "2");
console.log(1, 2);

// not 연산자
console.log(!1); // false
console.log(!0); // true
console.log(!"a"); // false, 문자열 안에 한글자라도 있으면 true
console.log(!""); // true
console.log(!null); // true
console.log(!!null); // false
// !! => 값을 명시적으로 boolean 타입으로 변환하는 일반적인 방법

console.log("abc".length);
console.log("abc".length > 0);
console.log(!!"" === false); //true

// 객체
let data = {
    name: "홍길동",
    age: 20,
};
console.log(data);

if(!data) {
    console.log("사용자 정보가 없습니다.")
} else if (data.name === "고길동" && data.age === 20) {
    console.log("사용자 이름과 나이가 모두 일치합니다.")
} else if(data.name === "고길동") {
    console.log("사용자 이름이 일치합니다.")
} else if(data.age === 20) {
    console.log("사용자의 이름은 일치하지 않지만 나이는 일치합니다.")
} else {
    console.log("사용자가 일치하지 않습니다.")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
