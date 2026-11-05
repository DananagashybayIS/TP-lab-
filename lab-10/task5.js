import {
    increase,
    decrease,
    reset,
    getCount
} from "./modules/counter.js";

import {
    updateCounter,
    showMessage
} from "./modules/ui.js";

document.getElementById("increase").addEventListener("click", () => {
    increase();
    updateCounter(getCount());
    showMessage("Счётчик увеличен");
});

document.getElementById("decrease").addEventListener("click", () => {
    decrease();
    updateCounter(getCount());
    showMessage("Счётчик уменьшен");
});

document.getElementById("reset").addEventListener("click", () => {
    reset();
    updateCounter(getCount());
    showMessage("Счётчик сброшен");
});
