const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    console.log(title.classList.toggle);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

console.log(title.className);

function init() {
    title.addEventListener("click", handleClick);
}

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    console.log(title.classList.toggle);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

console.log(title.className);

function init() {
    title.addEventListener("click", handleClick);
}
alert("깃허브 테스트");
init();