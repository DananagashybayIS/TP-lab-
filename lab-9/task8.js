const loadButton = document.getElementById("loadButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const status = document.getElementById("status");
const results = document.getElementById("results");
let posts = [];
async function loadPosts() {
    loadButton.disabled = true;
    status.textContent = "Загрузка публикаций...";
    results.replaceChildren();
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }
        posts = await response.json();
        status.textContent =
            "Загружено публикаций: " + posts.length;
        displayPosts(posts);
    } catch (error) {
        posts = [];
        status.textContent =
            "Ошибка загрузки. Проверьте интернет и повторите попытку.";
    } finally {
        loadButton.disabled = false;
    }
}
function displayPosts(list) {
    results.replaceChildren();
    if (list.length === 0) {
        const message = document.createElement("p");
        message.textContent = "Публикации не найдены.";
        results.appendChild(message);
        return;
    }
    const fragment = document.createDocumentFragment();
    list.forEach(post => {
        const card = document.createElement("article");
        card.className = "card";
        const title = document.createElement("h3");
        title.textContent = "ID: " + post.id + " — " + post.title;
        card.appendChild(title);
        fragment.appendChild(card);
    });
    results.appendChild(fragment);
}
function searchPosts() {
    if (posts.length === 0) {
        status.textContent =
            "Сначала загрузите публикации.";
        return;
    }
    const query = searchInput.value.trim().toLowerCase();
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(query)
    );
    displayPosts(filteredPosts);
    status.textContent =
        "Найдено публикаций: " + filteredPosts.length;
}
loadButton.addEventListener("click", loadPosts);
searchButton.addEventListener("click", searchPosts);
searchInput.addEventListener("input", searchPosts);
searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchPosts();
    }
});
