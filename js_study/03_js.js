// 객체
const student = {
    name: "홍길동",
    age: 20,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student["name"]);
console.log(student["age"]);

student["name"] = "김길동";

console.log(student);

student.name = "박길동";
student.age = 25;
student.adress = "조선시대";

console.log(student);

student.printName = () => console.log("이름: ", student.name);
student.printName();

const loginButton = {
    text: "로그인",
    value: "로그인 되었음",
    onClick: () => {
        console.log(loginButton.value);
    },
};

loginButton.onClick();

const loginButtonKeys = Object.keys(loginButton);
console.log(loginButtonKeys);

const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);

for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}
