const  humburger = document.querySelector(".humburger");
const  navbarlink = document.querySelector(".navbar-link");

humburger.addEventListener("click", () => {
    navbarlink.classList.toggle('open');
}) 