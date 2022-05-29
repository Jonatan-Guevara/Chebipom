(function () {
  const listElements = document.querySelectorAll(".menu_item--show");
  const links = document.querySelectorAll(".menu_link");
  const menu = document.querySelector(".hamburguer");
  const menuNavegacion = document.querySelector(".menu-navegacion");
  const X = document.querySelector(".X");

  const addClick =()=>{
    listElements.forEach(element =>{
      element.addEventListener('click', ()=>{
        console.log(element.children[1]);
        let submenu = element.children[1];
        let height = 0;

        element.classList.toggle('menu__item--active');

        if(submenu.clientHeight === 0){
          height = submenu.scrollHeight;
        }

        submenu.style.height = `${height}px`;
      })
    })
  }


  const linksClick = () => {
    links.forEach((link) => {
      link.addEventListener("click", () => {
        menuNavegacion.classList.toggle("spread");
        X.style.display = "none";
      });
    });
  };
  //linksClick();
  addClick();
})();
