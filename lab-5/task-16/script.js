let tasks = [];

const input = document.getElementById("task");
const list = document.getElementById("list");

function show() {
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        list.innerHTML += `
            <li>
                <input type="checkbox" ${task.done ? "checked" : ""}
                onchange="done(${i})">
                ${task.text}
                <button onclick="del(${i})">Удалить</button>
            </li>`;
    });

    document.getElementById("total").textContent = tasks.length;
    document.getElementById("done").textContent =
        tasks.filter(x => x.done).length;
    document.getElementById("todo").textContent =
        tasks.filter(x => !x.done).length;
}

function add() {
    if (input.value) {
        tasks.push({text: input.value, done: false});
        input.value = "";
        show();
    }
}

function done(i) {
    tasks[i].done = !tasks[i].done;
    show();
}

function del(i) {
    tasks.splice(i, 1);
    show();
}

document.getElementById("add").onclick = add;
