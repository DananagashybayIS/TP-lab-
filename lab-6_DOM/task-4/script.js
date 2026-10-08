const noteInput = document.getElementById("noteInput");
const addButton = document.getElementById("addButton");
const notes = document.getElementById("notes");
const message = document.getElementById("message");

addButton.addEventListener("click", addNote);

noteInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addNote();
    }
});

function addNote() {
    const text = noteInput.value.trim();

    if (text === "") {
        message.textContent = "Введите заметку!";
        message.style.color = "red";
        return;
    }

    const li = document.createElement("li");

    li.textContent = text + " ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", function() {
        li.remove();
        message.textContent = "Заметка удалена!";
        message.style.color = "red";
    });

    li.appendChild(deleteButton);
    notes.appendChild(li);

    message.textContent = "Заметка добавлена!";
    message.style.color = "green";

    noteInput.value = "";
}
