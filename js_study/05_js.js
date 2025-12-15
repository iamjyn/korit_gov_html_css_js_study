// 클래스
class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("홍길동", 20);
console.log(student1);
console.log(student1.name);
