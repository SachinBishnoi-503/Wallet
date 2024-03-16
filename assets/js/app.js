const movebox = document.querySelector(".toggle-circle");

movebox.addEventListener("click", function () {
    movebox.classList.toggle("right--0");
})

const menubar = document.querySelector(".menubar");
const menulist = document.querySelector(".menulist");

menubar.addEventListener("click", () => {
    menulist.classList.toggle("active");
})