let hamburguer = document.querySelector('.hamburguer');
let menuContainer = document.querySelector('.menu_container');

hamburguer.addEventListener('click', ()=>{
  menuContainer.classList.toggle('spread');
})