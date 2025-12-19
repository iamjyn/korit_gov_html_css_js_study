const { useState } = require("react");

const student = {
    name: "홍길동",
    age: 20,
    address: "조선시대",
    phone: "010-1234-5678",
};
const { name, address } = student;
console.log(name, address);

// REST 문법
const { age, phone, ...other } = student;
console.log(age);
console.log(phone);
console.log(other);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// Spread 문법
// 기존 객체의 모든 속성을 새로운 객체에 복사하거나,
// 새로운 속성을 추가할 때 사용
const newStudent = {
    ...student,
    gender: "남",
};
console.log(newStudent);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addName(name) {
    names = [...names, name];
}
addName("홍길동");
addName("홍길서");
addName("홍길남");
addName("홍길북");

console.log(names);

let obj = {
    data1: "data1",
    data2: "data2",
};

function addData(data) {
    obj = {
        ...obj,
        ...data,
    };
}

addData({ data3: "data3", data4: "data4", data5: "data5" });
console.log(obj);

// 1. title, author, publisherYear 속성을 포함하는 book 객체 생성

const book = {
    title: "해리포터",
    author: "J.K 롤링",
    publisherYear: 1997,
};

// 2. book 객체의 title과 author 속성 값을 출력 (점 표기법, 대괄호 표기법)
console.log(book.title);
console.log(book["author"]);

// 3. book 객체에 getAge()라는 메소드 추가
// 현재 연도(new Date().getFullYear())에서 publisherYear를 뺀 값을 리턴

book.getAge = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - book.publisherYear;
};

// function getAge(publisherYear) {
//     return new Date().getFullYear() - publisherYear;
// }

// 4. getAge() 호출해서 출력
console.log(book.getAge());

// 5. book 객체에 새로운 속성 genre를 추가하고 값을 할당 ("판타지")
book.genre = "판타지";

// 6. book 객체의 publisherYear를 2000으로 수정
book.publisherYear = 2000;

console.log(book);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const products = [
    { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
    { id: 2, name: "티셔츠", price: 25000, category: "의류" },
    { id: 3, name: "모니터", price: 300000, category: "전자제품" },
    { id: 4, name: "청바지", price: 50000, category: "의류" },
    { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];
//1. 50000원 이상인 제품만 필터링해서 expensiveProducts 배열에 넣고 출력
const expensiveProducts = products.filter((p) => p.price >= 50000);
console.log(expensiveProducts);

//2. products배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices배열 만들기
//map
// [{name: "노트북", price: 1200000}, {}...]
const productNamesAndPrices = products.map((p) => ({
    name: p.name,
    price: p.price,
}));
console.log(productNamesAndPrices);

//3. products배열에서 category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을
//10%할인한 discountProducts배열을 만드세요
const discountProducts = products
    .filter((p) => p.category === "전자제품")
    .map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price * 0.9,
        category: p.category,
    }));
console.log(discountProducts);

// =========================================================

// const [value, setValue] = useState("");
// value => 현재 상태값
// setValue => 현재 상태를 바꿔주는 함수

const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "데이터 set");
        },
    };

    return [dataState.data, dataState.setData];
};

const [value, setValue] = useState(10);
console.log(value);
setValue(20);
console.log(value);
