let burger = document.querySelector(".burger");
let navBar = document.querySelector(".nav-bar");
let navList = document.querySelector(".nav-list");



burger.addEventListener("click", ()=>{
    navBar.classList.toggle("h-nav-resp");
    navList.classList.toggle("v-class-resp")
})


let btn = document.getElementById("submit-btn");
console.log(btn)
btn.onclick = ()=>{
    location.reload();
}