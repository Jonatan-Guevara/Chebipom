(function(){
  const listElements = document.querySelectorAll('.menu_item--show');
  const list = document.querySelector('.menu_links');
  const menu = document.querySelector('.menu__hamburguer');

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

  addClick()
})();


