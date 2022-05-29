const hamburguer = document.querySelector(".hamburguer");
const X = document.querySelector(".X");
const menu = document.querySelector(".menu-navegacion");
const item = document.querySelector(".menu_item--show");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
  X.style.display = "block";
});

X.addEventListener("click", () => {
  menu.classList.toggle("spread");
  X.style.display = "none";
});

// window.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (
//     menu.classList.contains("spread") &&
//     e.target != menu &&
//     e.target != hamburguer
//   ) {
//     X.style.display = "none";
//     menu.classList.toggle("spread");

//     // console.log('cerrar')

//     //
//   }
// });
