let items = [];

const input = document.getElementById("buy");
const list = document.getElementById("list");

function show() {
    list.innerHTML = "";

    items.forEach((item, i) => {
        list.innerHTML += `<li>${item}</li>`;
    });
}

document.getElementById("add").onclick = function () {
    if (input.value) {
        items.push(input.value);
        input.value = "";
        show();
    }
};

document.getElementById("clear").onclick = function () {
    items = [];
    show();
};
