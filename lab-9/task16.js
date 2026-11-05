const loadButton = document.getElementById("loadButton");
const userFilter = document.getElementById("userFilter");
const status = document.getElementById("status");
const todoList = document.getElementById("todoList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");
let allTodos = [];
async function loadTodos() {
    loadButton.disabled = true;
    status.className = "";
    status.textContent = "Загрузка задач...";
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error("Некорректный формат данных");
        }
        allTodos = data;
        renderTodos();
        status.textContent =
            "Данные успешно загружены. Всего получено задач: " +
            allTodos.length;
    } catch (error) {
        allTodos = [];
        todoList.replaceChildren();
        totalCount.textContent = "0";
        completedCount.textContent = "0";
        pendingCount.textContent = "0";
        status.textContent =
            "Ошибка загрузки. Проверьте интернет и нажмите кнопку ещё раз.";
        status.className = "error";
    } finally {
        loadButton.disabled = false;
    }
}
function renderTodos() {
    const selectedUser = userFilter.value;
    let filteredTodos = allTodos;
    if (selectedUser !== "all") {
        filteredTodos = allTodos.filter(
            todo => todo.userId === Number(selectedUser)
        );
    }
    const completed = filteredTodos.filter(
        todo => todo.completed
    ).length;
    const pending = filteredTodos.filter(
        todo => !todo.completed
    ).length;
    totalCount.textContent = filteredTodos.length;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
    todoList.replaceChildren();
    if (filteredTodos.length === 0) {
        const message = document.createElement("p");
        message.textContent = "Задачи не найдены.";
        todoList.appendChild(message);
        return;
    }
    const fragment = document.createDocumentFragment();
    filteredTodos.forEach(todo => {
        const item = document.createElement("div");
        item.className = todo.completed
            ? "todo done"
            : "todo pending-task";
        const id = document.createElement("span");
        id.className = "todo-id";
        id.textContent = "ID: " + todo.id;
        const title = document.createElement("span");
        title.className = "todo-title";
        title.textContent = todo.title;
        const state = document.createElement("span");
        state.textContent = todo.completed
            ? "Выполнено"
            : "Не выполнено";
        item.append(id, title, state);
        fragment.appendChild(item);
    });
    todoList.appendChild(fragment);
}
loadButton.addEventListener("click", loadTodos);
userFilter.addEventListener("change", () => {
    if (allTodos.length > 0) {
        renderTodos();
        status.textContent = "Статистика обновлена.";
        status.className = "";
    }
});
