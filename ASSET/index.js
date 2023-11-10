const dialog = document.querySelector("dialog");
const ShowButton = document.querySelector("dialog + button");
const CloseButton = document.querySelector("dialog button");
const nav = document.querySelector(".nav");

ShowButton.addEventListener("click",() => {
    dialog.showModal();
});

CloseButton.addEventListener("click",() => {
    dialog.close();
});

