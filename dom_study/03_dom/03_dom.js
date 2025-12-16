const inputButton = document.querySelector(".input_button");
const tbody = document.querySelector(".data_list > tbody");
let num = 1;

inputButton.onclick = () => {
    const inputName = document.querySelector("#name");
    const inputAge = document.querySelector("#age");
    const inputAddress = document.querySelector("#address");

    if (
        inputName.value === "" ||
        inputAge.value === "" ||
        inputAddress.value === ""
    ) {
        alert("입력하지 않은 항목이 있습니다.");
        return;
    }

    tbody.innerHTML += `
    <tr>
        <td>${num++}</td>
        <td>${inputName.value}</td>
        <td>${inputAge.value}</td>
        <td>${inputAddress.value}</td>
    </tr>
    `;

    inputName.value = "";
    inputAge.value = "";
    inputAddress.value = "";
};
