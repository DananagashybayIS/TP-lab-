const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const postsContainer = document.getElementById("posts");
async function loadPosts() {
    loadButton.disabled = true;
    status.textContent = "Загрузка публикаций...";
    postsContainer.replaceChildren();
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }
        const posts = await response.json();
        posts.forEach(post => {
            const card = document.createElement("div");
            card.className = "card";
            const title = document.createElement("h3");
            title.textContent = "ID: " + post.id + " — " + post.title;
            card.appendChild(title);
            postsContainer.appendChild(card);
        });
        status.textContent = "Загружено публикаций: " + posts.length;
    } catch (error) {
        status.textContent =
            "Ошибка загрузки. Проверьте интернет и попробуйте снова.";
    } finally {
        loadButton.disabled = false;
    }
}
loadButton.addEventListener("click", loadPosts);
