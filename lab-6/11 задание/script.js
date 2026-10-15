const questions = document.querySelectorAll(”.faq-question”);

questions.forEach(function(question) {
question.addEventListener(“click”, function() {
const currentItem = question.parentElement;
const isOpen = currentItem.classList.contains(“active”);

    document.querySelectorAll(".faq-item").forEach(function(item) {
        item.classList.remove("active");
    });
    if (!isOpen) {
        currentItem.classList.add("active");
    }
});

});
