const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const icons = $$(".add1");
const texts = $$(".details__info--text");


icons.forEach((tab, index) => {
    const text = texts[index];
    tab.onclick = function() {
        text.classList.toggle("active");
    };
});