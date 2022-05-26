
addEventListener('load', ()=>{
  const uno = document.querySelector('#uno');
  const dos = document.querySelector('#dos');
  const result = document.querySelector('#result');
  const numero = document.querySelector('.number');
  const notasBuenas = document.querySelector('#notasBuenas');
  const notasMalas = document.querySelector('#notasMalas');
  const tiempo = document.querySelector('#tiempo');

  

  let buenas = [];
  let malas = [];



  let random = Math.floor(Math.random() * (11 - 2) + 2);
  let random2 = Math.floor(Math.random() * (11 - 2) + 2);

  console.log('hello word')

  uno.innerHTML =  random;
  dos.innerHTML =  random2;

  result.innerHTML = 'Contesta lo mas Rapido!!'
  
  const completed = document.querySelector('#completed').addEventListener('submit', e=>{
    let inicio = 0;

    let contando = setInterval(()=>{
      inicio++;
      tiempo.innerHTML = inicio + 's';

      if(inicio === 10){
        result.innerHTML = '';
        tiempo.innerHTML = '0s';
        if(numero.value == random * random2){
          console.log(inicio + 'soy yo')
          result.innerHTML = 'Lo hiciste bien!!!';
          result.classList = 'correct';
          buenas.push(numero.value);
          notasBuenas.innerHTML = buenas.length;
          clearInterval(contando);
        }else{
    
          result.innerHTML = 'Lo hiciste mal!!!' ;
          result.classList = 'incorrect';
    
          malas.push(numero.value);
          notasMalas.innerHTML = malas.length;
          clearInterval(contando);
        }

        
      }
    }, 1000);


   


    random = Math.floor(Math.random() * (11 - 2) + 2);
    random2 = Math.floor(Math.random() * (11 - 2) + 2);
    
    uno.innerHTML =  random;
    dos.innerHTML =  random2;

    e.preventDefault();

    console.log(numero.value);
    numero.value = '';
    console.log('ya');
  });
  


});
