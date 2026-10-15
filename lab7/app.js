// Данные портфолио
const projects = [
    {
        title: "Веб-дизайн",
        description: "Создание удобных и красивых интерфейсов."
    },
    {
        title: "Учебный проект",
        description: "Разработка сайта с использованием HTML, CSS и JavaScript."
    },
    {
        title: "Организация",
        description: "Планирование задач и организация рабочих процессов."
    }
];
// Данные каталога книг
const books = [
    { id: 1, title: "Маленький принц", author: "Антуан де Сент-Экзюпери" },
    { id: 2, title: "Гордость и предубеждение", author: "Джейн Остин" },
    { id: 3, title: "Алхимик", author: "Пауло Коэльо" },
    { id: 4, title: "1984", author: "Джордж Оруэлл" }
];
let favorites = [];
// Данные мероприятий
const events = [
    {
        id: 1,
        title: "День открытых дверей",
        date: "2026-11-10",
        description: "Знакомство с университетом и его возможностями."
    },
    {
        id: 2,
        title: "Мастер-класс по дизайну",
        date: "2026-11-15",
        description: "Практическое занятие по созданию интерфейсов."
    },
    {
        id: 3,
        title: "Встреча IT-клуба",
        date: "2026-11-20",
        description: "Обсуждение идей и новых проектов."
    }
];
let registrations = [];
const content = document.querySelector("#content");
const navigationButtons = document.querySelectorAll(".nav-btn");
// Переключение вкладок
navigationButtons.forEach(button => {
    button.addEventListener("click", () => {
        navigationButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderPage(button.dataset.page);
    });
});
// Отображение выбранной страницы
function renderPage(page) {
    if (page === "portfolio") {
        showPortfolio();
    } else if (page === "books") {
        showBooks();
    } else if (page === "events") {
        showEvents();
    }
}
// БАЗОВЫЙ УРОВЕНЬ: ПОРТФОЛИО
function showPortfolio() {
    content.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Обо мне и моих проектах";
    content.append(heading);
    const intro = document.createElement("p");
    intro.textContent =
        "Добро пожаловать! Здесь представлены мои навыки и учебные проекты.";
    content.append(intro);
    const cards = document.createElement("div");
    cards.className = "cards";
    projects.forEach(project => {
        const card = document.createElement("article");
        card.className = "card";
        const title = document.createElement("h3");
        title.textContent = project.title;
        const description = document.createElement("p");
        description.textContent = project.description;
        card.append(title, description);
        cards.append(card);
    });
    content.append(cards);
    const skills = document.createElement("p");
    skills.textContent =
        "Навыки: HTML, CSS, JavaScript, работа в команде и планирование.";
    content.append(skills);
}
// СРЕДНИЙ УРОВЕНЬ: КАТАЛОГ КНИГ
function showBooks() {
    content.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Каталог книг";
    content.append(heading);
    const description = document.createElement("p");
    description.textContent =
        "Добавляй понравившиеся книги в избранное.";
    content.append(description);
    const favoritesButton = document.createElement("button");
    favoritesButton.className = "action-btn";
    favoritesButton.textContent = `Избранное (${favorites.length})`;
    favoritesButton.addEventListener("click", showFavorites);
    content.append(favoritesButton);
    const cards = document.createElement("div");
    cards.className = "cards";
    books.forEach(book => {
        const card = document.createElement("article");
        card.className = "card";
        const title = document.createElement("h3");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = `Автор: ${book.author}`;
        const button = document.createElement("button");
        button.className = "action-btn";
        const isFavorite = favorites.includes(book.id);
        button.textContent = isFavorite
            ? "Убрать из избранного"
            : "В избранное";
        button.addEventListener("click", () => {
            if (favorites.includes(book.id)) {
                favorites = favorites.filter(id => id !== book.id);
            } else {
                favorites.push(book.id);
            }
            showBooks();
        });
        card.append(title, author, button);
        cards.append(card);
    });
    content.append(cards);
    const about = document.createElement("p");
    about.textContent =
        "О библиотеке: электронный каталог помогает находить книги и сохранять избранные.";
    content.append(about);
}
function showFavorites() {
    content.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Избранные книги";
    content.append(heading);
    const favoriteBooks = books.filter(book =>
        favorites.includes(book.id)
    );
    if (favoriteBooks.length === 0) {
        const message = document.createElement("p");
        message.className = "empty";
        message.textContent = "Избранных книг пока нет.";
        content.append(message);
    } else {
        favoriteBooks.forEach(book => {
            const card = document.createElement("article");
            card.className = "card";
            const title = document.createElement("h3");
            title.textContent = book.title;
            const author = document.createElement("p");
            author.textContent = `Автор: ${book.author}`;
            card.append(title, author);
            content.append(card);
        });
    }
    const backButton = document.createElement("button");
    backButton.className = "action-btn";
    backButton.textContent = "Вернуться в каталог";
    backButton.addEventListener("click", showBooks);
    content.append(backButton);
}
// ПОВЫШЕННЫЙ УРОВЕНЬ: УПРАВЛЕНИЕ МЕРОПРИЯТИЯМИ
function showEvents() {
    content.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Предстоящие мероприятия";
    content.append(heading);
    const cards = document.createElement("div");
    cards.className = "cards";
    events.forEach(event => {
        const card = document.createElement("article");
        card.className = "card";
        const title = document.createElement("h3");
        title.textContent = event.title;
        const date = document.createElement("p");
        date.textContent = `Дата: ${event.date}`;
        const description = document.createElement("p");
        description.textContent = event.description;
        const button = document.createElement("button");
        button.className = "action-btn";
        button.textContent = "Зарегистрироваться";
        button.addEventListener("click", () => {
            showRegistrationForm(event);
        });
        card.append(title, date, description, button);
        cards.append(card);
    });
    content.append(cards);
    const participantsButton = document.createElement("button");
    participantsButton.className = "action-btn";
    participantsButton.style.marginTop = "20px";
    participantsButton.textContent =
        `Участники (${registrations.length})`;
    participantsButton.addEventListener("click", showParticipants);
    content.append(participantsButton);
}
// Форма регистрации с проверкой данных
function showRegistrationForm(event) {
    content.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = `Регистрация: ${event.title}`;
    content.append(heading);
    const form = document.createElement("form");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Введите имя";
    nameInput.required = true;
    nameInput.maxLength = 60;
    nameInput.setAttribute("aria-label", "Имя участника");
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Введите email";
    emailInput.required = true;
    emailInput.setAttribute("aria-label", "Email участника");
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "action-btn";
    submitButton.textContent = "Подтвердить регистрацию";
    const message = document.createElement("p");
    message.className = "message";
    message.setAttribute("aria-live", "polite");
    form.append(nameInput, emailInput, submitButton, message);
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        if (!name || !email) {
            message.textContent = "Заполните все поля.";
            return;
        }
        const alreadyRegistered = registrations.some(registration =>
            registration.eventId === event.id &&
            registration.email.toLowerCase() === email.toLowerCase()
        );
        if (alreadyRegistered) {
            message.textContent =
                "Этот email уже зарегистрирован на мероприятие.";
            return;
        }
        registrations.push({
            name: name,
            email: email,
            eventId: event.id,
            eventTitle: event.title
        });
        message.textContent = "Вы успешно зарегистрированы!";
        form.reset();
        const participantsButton =
            document.createElement("button");
        participantsButton.type = "button";
        participantsButton.className = "action-btn";
        participantsButton.textContent = "Посмотреть участников";
        participantsButton.addEventListener("click", showParticipants);
        content.append(participantsButton);
    });
    content.append(form);
}
// Список участников
function showParticipants() {
    content.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Зарегистрированные участники";
    content.append(heading);
    if (registrations.length === 0) {
        const message = document.createElement("p");
        message.className = "empty";
        message.textContent = "Пока никто не зарегистрировался.";
        content.append(message);
    } else {
        const list = document.createElement("div");
        list.className = "cards";
        registrations.forEach((registration, index) => {
            const card = document.createElement("article");
            card.className = "card";
            const name = document.createElement("h3");
            name.textContent = `${index + 1}. ${registration.name}`;
            const email = document.createElement("p");
            email.textContent = `Email: ${registration.email}`;
            const eventTitle = document.createElement("p");
            eventTitle.textContent =
                `Мероприятие: ${registration.eventTitle}`;
            card.append(name, email, eventTitle);
            list.append(card);
        });
        content.append(list);
    }
    const backButton = document.createElement("button");
    backButton.className = "action-btn";
    backButton.textContent = "К мероприятиям";
    backButton.addEventListener("click", showEvents);
    content.append(backButton);
}
// Стартовая страница
renderPage("portfolio");
