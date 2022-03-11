const toggle = document.getElementById("nav-toggle")
const links = document.getElementById("nav-links")

toggle.addEventListener("click", () => {
    links.classList.toggle("show-links")
})

const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

//navbar 
// const navbar = document.getElementById('navbar');

// window.addEventListener("scroll", ()=> {
//     if (window.scrollY > 0)
//     {
//         navbar.classList.add("fixed")
//     }
//     else
//     {
//         navbar.classList.remove("fixed")
//     }
// })