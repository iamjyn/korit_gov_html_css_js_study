// 단축 평가 논리 연산
// && ||

const name = "홍길동";
console.log(!!name && !!"홍길동");

// &&
// 앞의 값이 true일때, 뒤에 "값"을 리턴
// 앞의 값이 false일때, false 리턴
console.log(true && 10);
console.log(false && 10);

const data = [1, 2, 3, 4, 5];
console.log(!!data && "데이터 출력");

const data2 = [];
console.log(data2.length != 0 && "데이터 출력");

// ||
// 앞의 값이 true일때, true 리턴
// 앞의 값이 false일때, 뒤의 "값"을 리턴
console.log(true || 10);

// ??
// 앞의 값이 null 또는 undefined면, 뒤의 "값"을 리턴
// 앞의 값이 null 또는 undefined가 아니면, 앞의 값을 리턴
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);
console.log(0 ?? 100);
console.log("" ?? 100);
