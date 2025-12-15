// 배열
const arr1 = []; // 빈 배열
const arr2 = new Array(); // 빈 배열

// push - 배열의 끝에 요소를 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
console.log(arr2);

console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false

const json1 = JSON.stringify(arr1); // json 형식의 문자열로 변환
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json1 === json2);

const arr3 = JSON.parse(json1); // json 형식의 문자열을 다시 js로 변환
console.log(arr3);

const names = ["홍길동", "김길동", "박길동"];
names.push("황길동");

// pop - 요소 제거
// 배열의 요소 중에 마지막 요소를 제거 후 제거된 요소를 반환
console.log(names.pop());
console.log(names);

// splice - 요소 수정, 삽입, 제거
// (삽입될 인덱스, 제거할 개수, 추가할 요소)
names.splice(1, 0, "강길동");
console.log(names);

names[0] = "홍길서";
console.log(names);

// find - 요소 찾기
// 주어진 조건 함수를 만족하는 배열의 첫번째 요소를 반환
const findFx = (str) => str === "강길동";
const foundName = names.find(findFx);
console.log(foundName);

console.log(names.find((name) => name === "박길동"));

const students = [
    { name: "홍길동", age: 21 },
    { name: "홍길서", age: 22 },
    { name: "홍길남", age: 23 },
    { name: "홍길북", age: 24 },
];
console.log(
    students.find((student) => student.name === "홍길서" && student.age === 22)
);

// includes 찾기
console.log(names.includes("박길동"));

// filter
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n % 2 === 0));

console.log(students.filter((student) => student.age > 22));

// map
console.log(numbers.map((n) => n * 10));

console.log(
    students.map((student) => {
        if (student.age === 22) {
            return {
                name: student.name,
            };
        }
        return student;
    })
);
