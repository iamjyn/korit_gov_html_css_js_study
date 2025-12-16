const title1 = document.getElementById("title");
console.log(title1);
console.log({ title1 });

const titles = document.getElementsByClassName("title");
console.log(titles);

const h3 = document.getElementsByTagName("h3");
console.log(h3);

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
console.log(d1, d2);

const title2 = document.querySelector("#title");
const titles2 = document.querySelectorAll(".title");

const div1 = document.querySelector("#d1");
const div2 = div1.querySelector("#d2");

// const div2 = document.querySelector("#div > #d2");
console.log(div2);

div2.innerHTML = "<p>innerHTML입니당</p>";
// div2.innerText = "<p>innerHTML입니당</p>";

const students = [
    { name: "홍길동", age: 21, address: "조선시대" },
    { name: "홍길서", age: 22, address: "고구려" },
    { name: "홍길남", age: 23, address: "백제" },
    { name: "홍길북", age: 24, address: "신라" },
];

const tbody = document.querySelector(".student_table > tbody");

const trs = students.map((student, index) => {
    return `
    <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.address}</td>
    </tr>
    `;
});

console.log(trs);

tbody.innerHTML = trs.join("");

const tdList = document.querySelectorAll("td");
tdList.forEach((td) => (td.style = "border: 1px solid black"));

const studentTable = document.querySelector(".student_table");
studentTable.id = "table_id";
studentTable.classList.remove("student");
studentTable.classList.add("student_class");
